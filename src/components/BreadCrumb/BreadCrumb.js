import React from "react";
import { useLocation, Link } from "react-router-dom";

import { Breadcrumb } from "antd";

import "./BreadCrumb.css";

const BreadCrumb = () => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div className="breadcrumb">
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item className="bread">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb className="crumb">{capatalize(name)}</Breadcrumb>
            ) : (
              <Breadcrumb.Item className="crumb">
                <Link to={`${routeTo}`}>{capatalize(name)}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default BreadCrumb;
