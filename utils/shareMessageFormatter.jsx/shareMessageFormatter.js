export const shareExpertMessageFormatter = ({ username, tags, userId }) => {
  const INVESTOR_FRONTEND = "https://investor.investwithtribe.com";
  const shareURL = `${INVESTOR_FRONTEND}/expert/profile/${username}?utm_medium=referral-investor&utm_campaign=expert-profile&utm_content=${userId}`;

  const url = new URL(
    `${INVESTOR_FRONTEND}/expert/profile/${username}?utm_medium=referral-investor&utm_campaign=expert-profile&utm_content=${userId}`
  );

  let defaultHashags = [" #investwithtribe", ` #${username}`];

  const description = `Hello everyone! Do checkout my awesome profile on Invest With Tribe. It has my verified past performance, and you can subscribe to my portfolios and stockbaskets as well`;

  let message = `${description}\n\nLink:${url}\n\n${defaultHashags.join(" ")}`;
  if (tags) {
    const newTags = tags.map((tag) => ` #${tag}`).join(" ");
    const newHashtags = defaultHashags.concat(newTags).join(" ");
    message = `${description}\n\nLink:${url}\n\n${newHashtags}`;
  }

  const messageForWhatsApp = `${description}\n\nLink:${
    url + "&utm_source=whatsapp"
  }\n\n${defaultHashags.join(" ")}`;

  const telegramMessage = `${description}\n\nLink:${
    url + "&utm_source=telegram"
  }\n\n${defaultHashags.join(" ")}`;

  const twitterMessage = `${description}\n\nLink:${
    url + "&utm_source=twitter"
  }\n\n${defaultHashags.join(" ")}`;

  const redditMessage = `${description}\n\nLink:${
    url + "&utm_source=reddit"
  }\n\n${defaultHashags.join(" ")}`;

  const whatsAppMessage = encodeURIComponent(messageForWhatsApp);

  return {
    url,
    whatsAppMessage,
    twitterMessage,
    telegramMessage,
    redditMessage,
    message,
    shareURL,
  };
};
