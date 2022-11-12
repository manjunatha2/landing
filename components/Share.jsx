import {
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  TelegramIcon,
  TelegramShareButton,
  RedditIcon,
  RedditShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  CopyUrlText,
  ShareContainer,
  ShareIconWrapper,
} from "components/ShareCard.Elements.jsx";
import {
  INVESTOR_FRONTEND,
  shareExpertMessageFormatter,
} from "utils/shareMessageFormatter";

const Share = () => {
  const {
    redditMessage,
    telegramMessage,
    twitterMessage,
    whatsAppMessage,
    message,
    shareURL,
  } = shareExpertMessageFormatter({
    username: username,
    tags,
    userId: user?._id,
  });
  const HandleCopy = () => {
    if (navigator) {
      navigator.clipboard.writeText(shareURL);
      toast.success("Link copied to clipboard", {
        position: "top-center",
      });
    }
  };
  return (
    <Modal
      showModal={showShareModel}
      setShowModal={() => setShowShareModel(false)}
      heading={<h1>Share</h1>}
    >
      <ShareContainer>
        <ShareIconWrapper>
          <a
            href={`https://wa.me/?text=${whatsAppMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon size={50} round></WhatsappIcon>
          </a>
        </ShareIconWrapper>
        <ShareIconWrapper>
          <TwitterShareButton url={twitterMessage}>
            <TwitterIcon size={50} round />
          </TwitterShareButton>
        </ShareIconWrapper>
        <ShareIconWrapper>
          <TelegramShareButton url={telegramMessage}>
            <TelegramIcon size={50} round />
          </TelegramShareButton>
        </ShareIconWrapper>
        <ShareIconWrapper>
          <RedditShareButton url={redditMessage}>
            <RedditIcon size={50} round />
          </RedditShareButton>
        </ShareIconWrapper>

        <CopyUrlText onClick={HandleCopy}>
          {shareURL.substring(0, 30) + "..."}
        </CopyUrlText>
        <p
          onClick={HandleCopy}
          style={{
            fontSize: "1rem",
            color: "#626262",
            fontWeight: "400",
            lineHeight: "1.1rem",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Click to copy
        </p>
      </ShareContainer>
    </Modal>
  );
};

export default Share;
