import React from "react";

export const MDX = ({ children }) => <div className="markdown">{children}</div>;

export const Wrapper = ({ children }) => (
  <div className="p-6 max-w-2xl">{children}</div>
);

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <MDX>{children}</MDX>
    </Wrapper>
  );
};

export default Layout;
