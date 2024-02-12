import { apiInitializer } from "discourse/lib/api";
import SocialLinksClickable from "../components/social-links-clickable";

export default apiInitializer("1.13.0", (api) => {
  api.renderInOutlet("user-post-names", SocialLinksClickable);
  api.renderInOutlet("user-card-post-names", SocialLinksClickable);

  api.modifyClass("component:user-card-contents", {
    pluginId: "social-links-clickable",
    hasLocationOrWebsite: true,
  });
});
