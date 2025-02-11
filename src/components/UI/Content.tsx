import React from "react";

import './Content.css'

type ContentProps = {
  top: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
  isHome:boolean;
};

const Content = ({ top, left, right, isHome = false }: ContentProps) => {
  return (
    <section className="page-contents">
      {top && <div className="page-contents-top">{top}</div>}
      <div className="page-contents-info">
        <div className={isHome ? 'page-contents-left-home' : 'page-contents-left'}>{left}</div>
        <div className="page-contents-right">{right}</div>
      </div>
    </section>
  );
};

export default Content;
