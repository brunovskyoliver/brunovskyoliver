import React, { useState, useEffect } from "react";
import "./Loading.css";

interface LoadingProps {
  children: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading ? (
    <div className="loading">
      <svg width="64px" height="48px">
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id="back"
        ></polyline>
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id="front"
        ></polyline>
      </svg>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loading;
