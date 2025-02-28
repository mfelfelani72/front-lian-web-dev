export const REDIRECT_ROUTES = ["/dashboard", "/landing"];

export const ALL_ROUTES = [
  // test
  "/mohammad/test",
  // Welcome
  "/",
  "/landing",
  "/slide-screen",
  "/home",
  // Auth
  "/login",
  "/register",
];

export const NOT_RELOAD_ROUTES = [
  ["is_login", ["/login", "/register"]],
  [
    "from_location",
    ["/confirm", "/change-password", "/change-password-confirm"],
  ],
  [
    "/",
    [
      // Welcome
      "/slide-screen",
    ],
  ],
];
