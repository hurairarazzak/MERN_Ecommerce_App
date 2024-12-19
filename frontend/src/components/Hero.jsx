import React from "react";
import 'animate.css';
import { Button, Typography, Row, Col } from "antd";

const HeroSection = () => {
  const { Title, Text } = Typography;

  return (
    <div className="text-white py-20 px-6">
      <Row align="middle" justify="center" gutter={[16, 16]} className="max-w-7xl mx-auto">
        {/* Text Content */}
        <Col xs={24} md={12} className="text-center md:text-left">
          <Title level={1} className="prata-regular text-4xl font-bold leading-tight">
            Discover Your Perfect Style
          </Title>
          <Text className="text-lg prata-regular font-medium opacity-200">
          Discover exclusive fashion that blends comfort, elegance, and the latest trends.
          </Text>
        </Col>

        {/* Image Content */}
        <Col xs={24} md={12} className="animate__animated animate__fadeInLeft flex justify-center">
          <img
            src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Hero Product"
            className="rounded-lg shadow-lg w-full"
          />
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
