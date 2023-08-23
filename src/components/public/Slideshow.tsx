import React, { useState, useEffect } from "react";

const Slideshow = ({ content }: { content: React.JSX.Element[] }) => {
  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentContent((currentContent + 1) % content.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentContent, content.length]);

  return (
    <div className="mx-auto">
      <button
        onClick={() => setCurrentContent((currentContent + 1) % content.length)}
      >
        {content[currentContent]}
      </button>
    </div>
  );
};

export default Slideshow;
