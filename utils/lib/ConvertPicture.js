export const ConvertSvgBase64 = async (file) => {
  let base64SvgUrl = "";
  const response = await fetch(file);
  const svgText = await response.text();

  const base64Svg = btoa(svgText);
  base64SvgUrl = `data:image/svg+xml;base64,${base64Svg}`;
  return base64SvgUrl;
};
export const ConvertPngBase64 = async (file) => {
  const response = await fetch(file);
  const blob = await response.blob();
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
