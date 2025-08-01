export default function ArrowRight({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 16 16"
      style={{ ...style }}
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M7.5 4.5L11 8l-3.5 3.5m-3-7L8 8l-3.5 3.5"
        strokeWidth={0.9}
      ></path>
    </svg>
  );
}
