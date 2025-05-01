// src/components/GitHubActionBar.jsx

import React from "react";

const GitHubActionBar = ({ user, repo }) => {
  if (!user || !repo) return null;

  return (
    <div className="github-action-bar">
      <iframe
        src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star&count=true`}
        frameBorder="0"
        scrolling="0"
        width="100"
        height="20"
        title="GitHub Star"
      ></iframe>
      <iframe
        src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=fork&count=true`}
        frameBorder="0"
        scrolling="0"
        width="100"
        height="20"
        title="GitHub Fork"
      ></iframe>
      <a
        href={`https://github.com/${user}/${repo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="github-view-button"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default GitHubActionBar;
