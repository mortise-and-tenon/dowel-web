import React, { useState, useEffect, useRef } from "react";
import "./ImageCarousel.css";
import { CarouselProps } from "@site/src/types/carousel";

const ImageCarousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  autoPlayInterval = 3000,
  showIndicators = true,
  showControls = true,
}) => {
  // 状态管理
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 边界处理：获取上一个/下一个索引
  const getPrevIndex = () =>
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  // 切换图片
  const handleChangeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // 自动轮播逻辑
  useEffect(() => {
    if (autoPlay && images.length > 1 && !isHovering) {
      intervalRef.current = setInterval(() => {
        handleChangeIndex(getNextIndex());
      }, autoPlayInterval);
    }

    // 清除定时器（组件卸载/依赖变化时）
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, currentIndex, isHovering, images.length]);

  // 空数据处理
  if (images.length === 0) {
    return <div className="carousel-empty">暂无图片</div>;
  }

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 图片容器 */}
      <div className="carousel-slider">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <img
              src={image.url}
              alt={image.alt || `carousel-image-${index}`}
              className="carousel-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* 左右控制按钮 */}
      {showControls && images.length > 1 && (
        <>
          <button
            className="carousel-control prev"
            onClick={() => handleChangeIndex(getPrevIndex())}
            aria-label="上一张图片"
          >
            ❮
          </button>
          <button
            className="carousel-control next"
            onClick={() => handleChangeIndex(getNextIndex())}
            aria-label="下一张图片"
          >
            ❯
          </button>
        </>
      )}

      {/* 指示器 */}
      {showIndicators && images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleChangeIndex(index)}
              aria-label={`切换到第${index + 1}张图片`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
