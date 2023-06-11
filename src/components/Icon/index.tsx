import React from 'react'

interface IIcon {
  name: string
  width: number
  height: number
  color: string
}

const Icon = ({ name, width, height, color }: IIcon) => {
  const iconPath = `/${name}.svg`; // 替换为你的 SVG 文件路径

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24" // 根据 SVG 的视图框设置
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={iconPath} />
    </svg>
  );
};

export default Icon;