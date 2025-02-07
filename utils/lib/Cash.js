export const SetCashLocal = (name, object) => {
  // cash object in local storage
  if (object !== "") {
    const existingData = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];

    existingData.push({ [name]: object });
    localStorage.setItem("data", JSON.stringify(existingData));
  }
  // delete object from local storage
  else if (localStorage.getItem("data")) {
    const existingData = JSON.parse(localStorage.getItem("data"));
    const data = [];

    existingData.map((item, index) => {
      Object.keys(item).forEach((key) => {
        if (key !== name) data.push(item);
      });
    });
    localStorage.setItem("data", JSON.stringify(data));
  }
};

export const GetCashLocal = (name) => {
  if (localStorage.getItem("data")) {
    const length = JSON.parse(localStorage.getItem("data")).length;

    for (let index = 0; index < length; index++) {
      if (JSON.parse(localStorage.getItem("data"))[index][name])
        return JSON.parse(localStorage.getItem("data"))[index][name];
    }
  }
  return "null";
};
export const SetCashSession = (name, object) => {
  // cash object in local storage
  if (object !== "") {
    const existingData = sessionStorage.getItem("data")
      ? JSON.parse(sessionStorage.getItem("data"))
      : [];

    existingData.push({ [name]: object });
    sessionStorage.setItem("data", JSON.stringify(existingData));
  }
  // delete object from local storage
  else if (sessionStorage.getItem("data")) {
    const existingData = JSON.parse(sessionStorage.getItem("data"));
    const data = [];

    existingData.map((item, index) => {
      Object.keys(item).forEach((key) => {
        if (key !== name) data.push(item);
      });
    });
    sessionStorage.setItem("data", JSON.stringify(data));
  }
};

export const GetCashSession = (name) => {
  if (sessionStorage.getItem("data")) {
    const length = JSON.parse(sessionStorage.getItem("data")).length;

    for (let index = 0; index < length; index++) {
      if (JSON.parse(sessionStorage.getItem("data"))[index][name])
        return JSON.parse(sessionStorage.getItem("data"))[index][name];
    }
  }
  return "null";
};
