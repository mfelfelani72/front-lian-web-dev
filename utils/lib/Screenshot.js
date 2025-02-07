import { toPng } from "html-to-image";

export const _Screenshot = (object, status) => {
  const id = object?.id;
  const box = document.getElementById(id);
  const rect = box.getBoundingClientRect();
  const image = document.getElementById("image-" + id);
  image.classList.add("hidden");

  toPng(box)
    .then((dataURL) => {
      // for download

      // const link = document.createElement("a");
      // link.download = "my-image.png";
      // link.href = dataUrl;
      // link.click();

      image.style.width = rect.width;
      image.style.height = rect.height;

      if (object?.countX === 1 && object?.countY === 1)
        image.appendChild(dataURL);
      else {
        const boxWidth = rect.width / object?.countX;
        const boxHeight = rect.height / object?.countY;

        const pieceWidth = object?.countX;
        const pieceHeight = object?.countY;

        for (let i = 0; i < pieceWidth; i++) {
          const flex = document.createElement("div");
          flex.classList.add("flex", "flex-row-reverse", "piece");
          for (let j = 0; j < pieceHeight; j++) {
            const piece = document.createElement("div");
            piece.className = "piece";

            piece.style.setProperty("--random-x", Math.random() - 0.5);
            piece.style.setProperty("--random-y", Math.random() - 0.5);

            const x = j * boxWidth;
            const y = i * boxHeight;

            piece.style.width = `${boxWidth}px`;
            piece.style.height = `${boxHeight}px`;

            piece.style.backgroundPosition = `-${x}px -${y}px`;

            piece.style.backgroundImage = `url(${dataURL})`;

            flex.appendChild(piece);
          }
          image.appendChild(flex);
        }
      }
    })
    .catch((error) => {
      console.error("oops, something went wrong!", error);
    });
};
