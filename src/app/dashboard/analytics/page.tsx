import { Col, Row } from "antd";
import React from "react";

const LinkAnalytics = () => {
  return <div>
    <Row gutter={[16, 8]}>
      <Col xs={24} sm={12}>
      <div className="flex flex-col justify-center items-center w-full gap-y-4">
          <div className="border border-gray-200 bg-white p-4 w-full">1</div>
          <div className="border border-gray-200 bg-white p-4 w-full">2</div>
          <div className="border border-gray-200 bg-white p-4 w-full">3</div>
          <div className="border border-gray-200 bg-white p-4 w-full">4</div>
      </div>
      </Col>
      <Col xs={24} sm={12}>
      <div className="flex flex-col justify-center items-center w-full gap-y-4">
          <div className="border border-gray-200 bg-white p-4 w-full">1</div>
          <div className="border border-gray-200 bg-white p-4 w-full">2</div>
          <div className="border border-gray-200 bg-white p-4 w-full">3</div>
      </div>
      </Col>
    </Row>
  </div>;
};

export default LinkAnalytics;
