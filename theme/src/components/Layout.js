import React from "react";

export const Content = ({ children }) => (
  <div className="content">{children}</div>
);

export const Wrapper = ({ children }) => (
  <div className="p-6 max-w-2xl">{children}</div>
);

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
