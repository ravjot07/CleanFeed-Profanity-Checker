console.log("CleanFeed background script running");

chrome.runtime.onInstalled.addListener(() => {
  console.log("CleanFeed extension installed");
});
