export const shareOnLinkedIn = () => {
    const baseUrl = "https://www.linkedin.com/sharing/share-offsite/?url=";
    const siteUrl =
      "https://random-quote-izvzbb8t7-ibrahim-003s-projects.vercel.app/";
    const shareUrl = `${baseUrl}${encodeURIComponent(siteUrl)}`;
    window.open(shareUrl, "_blank");
}

export const shareOnFacebook = () => {
    const baseUrl = "https://www.facebook.com/sharer/sharer.php?u=";
    const siteUrl =
      "https://random-quote-izvzbb8t7-ibrahim-003s-projects.vercel.app/";
    const shareUrl = `${baseUrl}${encodeURIComponent(siteUrl)}`;
    window.open(shareUrl, "_blank");
}

export const shareOnTwitter = () => {
    const baseUrl = "https://twitter.com/intent/tweet?";
    const siteUrl =
      "https://random-quote-izvzbb8t7-ibrahim-003s-projects.vercel.app/";
    const shareUrl = `${baseUrl}${encodeURIComponent(siteUrl)}`;
    window.open(shareUrl, "_blank");
}
