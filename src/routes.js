import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from "@vkontakte/vk-mini-apps-router";

export const DEFAULT_ROOT = "default_root";

export const DEFAULT_VIEW = "default_view";

export const DEFAULT_VIEW_PANELS = {
  HOME: "home",
  PERSIK: "persik",
  CARDS: "cards",
  CARD_TOPIC: "cardTopic",
  THEORY: "theory",
  THEORY_TOPIC: "theoryTopic",
  THEORY_ITEM_PAGE: "theoryItemPage",
  TESTS: "tests",
  TEST_DIRECTION: "testDirection",
  TEST_SUBJECT: "testSubject",
  TEST_TOPIC: "testTopic",
};

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, "/", []),
      createPanel(
        DEFAULT_VIEW_PANELS.PERSIK,
        `/${DEFAULT_VIEW_PANELS.PERSIK}`,
        []
      ),

      createPanel(
        DEFAULT_VIEW_PANELS.CARDS,
        `/${DEFAULT_VIEW_PANELS.CARDS}`,
        []
      ),

      createPanel(
        DEFAULT_VIEW_PANELS.CARD_TOPIC,
        `/${DEFAULT_VIEW_PANELS.CARD_TOPIC}/:topic`,
        []
      ),

      createPanel(
        DEFAULT_VIEW_PANELS.THEORY,
        `/${DEFAULT_VIEW_PANELS.THEORY}`,
        []
      ),

      createPanel(
        DEFAULT_VIEW_PANELS.THEORY_TOPIC,
        `/${DEFAULT_VIEW_PANELS.THEORY_TOPIC}/:topic`,
        []
      ),

      createPanel(
        DEFAULT_VIEW_PANELS.THEORY_ITEM_PAGE,
        `/${DEFAULT_VIEW_PANELS.THEORY_ITEM_PAGE}/:topic`,
        []
      ),

      createPanel(
        DEFAULT_VIEW_PANELS.TESTS,
        `/${DEFAULT_VIEW_PANELS.TESTS}`,
        []
      ),
      createPanel(
        DEFAULT_VIEW_PANELS.TEST_DIRECTION,
        `/${DEFAULT_VIEW_PANELS.TEST_DIRECTION}/:topic`,
        []
      ),

      createPanel(
        DEFAULT_VIEW_PANELS.TEST_SUBJECT,
        `/${DEFAULT_VIEW_PANELS.TEST_SUBJECT}/:topic`,
        []
      ),

      createPanel(
        DEFAULT_VIEW_PANELS.TEST_TOPIC,
        `/${DEFAULT_VIEW_PANELS.TEST_TOPIC}/:topic`,
        []
      ),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
