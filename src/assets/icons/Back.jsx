export default function Back({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      style={{ ...style }}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4 12l6-6m-6 6l6 6m-6-6h10.5m5.5 0h-2.5"
      ></path>
    </svg>
  );
}
