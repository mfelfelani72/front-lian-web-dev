import html2canvas from "html2canvas";

// Constants

//  --> for DeleteObjectThanosEffect
const TRANSITION_DURATION = 1;
const TRANSITION_DELAY = 1.35;
const currentLayerCount = 32;

export const IconMoveLeftRight = (iconId, task, inputsTask) => {
  const object = document.getElementById(iconId);
  object.classList.add("rtl:moveIconRightLeft", "ltr:moveIconLeftRight");

  setTimeout(() => {
    object.classList.remove("rtl:moveIconRightLeft");
    object.classList.remove("ltr:moveIconLeftRight");
    task(inputsTask);
  }, 200);
};

export const DeleteObjectExplode = (object) => {
  const id = object?.id;
  const overlayId = object?.overlayId;
  const box = document.getElementById(id);
  const parent = document.getElementById(id + "-body");
  parent.classList.remove("border");
  const image = document.getElementById("image-" + id);

  document.getElementById(id + "-loader").classList.remove("hidden");

  document.getElementById(id + "-delete").classList.add("hidden");
  document.getElementById(id + "-delete").classList.remove("flex");
  document.getElementById(overlayId).classList.add("hidden");

  image.classList.remove("hidden");
  image.classList.add("explode");

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  setTimeout(() => {
    box.remove();
  }, 3000);
};

export const DeleteAllBoxes = (parentBoxesId) => {
  const boxes = Array.from(document.getElementById(parentBoxesId).children);
  boxes.forEach((item, index) => {
    item.style.setProperty("--shift-x", `${index * 100}px`);
    item.classList.add("animate-shift-right");
  });
};

const hideTarget = (object) => {
  const box = document.getElementById(object?.id);
  delay(900).then(() => {
    document.getElementById(object?.overlayId).classList.add("hidden");
    document.getElementById(object?.id + "-delete").classList.add("hidden");
    box.style.zIndex = -20;
    box.style.transition = `opacity 0.01s ease`;
    box.style.opacity = 0;
  });
  delay(2000).then(() => {
    object?.setSendRequest(false);
    box.remove();
  });
};

const sampler = (imgDatas, sourceImgData, width, height, layerCount) => {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      for (let l = 0; l < 2; l++) {
        const pieceIndex = Math.floor(
          (layerCount * (Math.random() + (2 * x) / width)) / 3
        );
        const pixelPos = 4 * (y * width + x);
        for (let rgbaIndex = 0; rgbaIndex < 4; rgbaIndex++) {
          const dataPos = pixelPos + rgbaIndex;
          imgDatas[pieceIndex].data[dataPos] = sourceImgData.data[dataPos];
        }
      }
    }
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const PrepareDeleteObjectThanosEffect = (boxId, distanceTop = "7") => {
  const children = document.querySelectorAll(`#${"effect-" + boxId} > canvas`);

  if (children.length === 0) {
    const box = document.getElementById(boxId);
    const effect = document.getElementById("effect-" + boxId);
    const bRect = box.getBoundingClientRect();
    const container = document.getElementById("cards");
    const scrollY = container.scrollTop;
    effect.style.left = `${bRect.left}`;
    effect.style.top = `calc(${bRect.y + scrollY}px - ${distanceTop}rem)`;
    effect.style.width = `${bRect.width}`;
    effect.style.height = `${bRect.height}`;

    html2canvas(box, { backgroundColor: null })
      .then((canvas) => {
        const context = canvas.getContext("2d");
        const { width, height } = canvas;
        const imgData = context.getImageData(0, 0, width, height);
        const effectImgDatas = [];
        for (let i = 0; i < currentLayerCount; i++) {
          effectImgDatas.push(context.createImageData(width, height));
        }

        sampler(effectImgDatas, imgData, width, height, currentLayerCount);

        for (let i = 0; i < currentLayerCount; i++) {
          const canvasClone = canvas.cloneNode();
          canvasClone.getContext("2d").putImageData(effectImgDatas[i], 0, 0);
          const transitionDelay = TRANSITION_DELAY * (i / currentLayerCount);
          canvasClone.style.transitionDelay = `${transitionDelay}s`;

          effect.appendChild(canvasClone);
        }
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  }
};

export const DeleteObjectThanosEffect = (object) => {
  const effect = document.getElementById("effect-" + object?.id);
  const children = document.querySelectorAll(
    `#${"effect-" + object?.id} > canvas`
  );

  children.forEach((canvasClone, index) => {
    delay(0).then(() => {
      const rotate1 = 15 * (Math.random() - 0.5);
      const rotate2 = 15 * (Math.random() - 0.5);
      const fac = 2 * Math.PI * (Math.random() - 0.5);
      const translateX = 60 * Math.cos(fac);
      const translateY = 30 * Math.sin(fac);

      canvasClone.style.transform = `rotate(${rotate1}deg) translate(${translateX}px, ${translateY}px) rotate(${rotate2}deg)`;
      canvasClone.style.opacity = 0;

      const removeDelay = 1e3 * (TRANSITION_DURATION + 1 + Math.random());
      delay(removeDelay).then(() => {
        effect.removeChild(canvasClone);
      });
    });
  });

  hideTarget(object);
};
