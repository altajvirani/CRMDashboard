export default function AddIcon({
  styles,
  theme,
}: {
  styles: string;
  theme: string | null;
}) {
  return (
    <>
      {theme === "primary" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="93"
          height="93"
          viewBox="0 0 93 93"
          className={styles}>
          <g id="Group_2" data-name="Group 2" transform="translate(-865 -204)">
            <g
              id="Rectangle_1"
              data-name="Rectangle 1"
              transform="translate(865 204)"
              fill="rgba(231,233,236,0.7)"
              stroke="#4a556d"
              stroke-width="9">
              <rect width="93" height="93" rx="31" stroke="none" />
              <rect
                x="4.5"
                y="4.5"
                width="84"
                height="84"
                rx="26.5"
                fill="none"
              />
            </g>
            <line
              id="Line_1"
              data-name="Line 1"
              y2="34"
              transform="translate(911.5 233.5)"
              fill="none"
              stroke="#4a556d"
              stroke-linecap="round"
              stroke-width="8"
            />
            <line
              id="Line_2"
              data-name="Line 2"
              y2="34"
              transform="translate(928.5 250.5) rotate(90)"
              fill="none"
              stroke="#4a556d"
              stroke-linecap="round"
              stroke-width="8"
            />
          </g>
        </svg>
      ) : theme === "ghost" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="93"
          height="93"
          viewBox="0 0 93 93"
          className={styles}>
          <g id="Group_2" data-name="Group 2" transform="translate(-865 -204)">
            <g
              id="Rectangle_1"
              data-name="Rectangle 1"
              transform="translate(865 204)"
              fill="#EBEBEB"
              stroke="#8F8F8F"
              stroke-width="9">
              <rect width="93" height="93" rx="31" stroke="none" />
              <rect
                x="4.5"
                y="4.5"
                width="84"
                height="84"
                rx="26.5"
                fill="none"
              />
            </g>
            <line
              id="Line_1"
              data-name="Line 1"
              y2="34"
              transform="translate(911.5 233.5)"
              fill="none"
              stroke="#8F8F8F"
              stroke-linecap="round"
              stroke-width="8"
            />
            <line
              id="Line_2"
              data-name="Line 2"
              y2="34"
              transform="translate(928.5 250.5) rotate(90)"
              fill="none"
              stroke="#8F8F8F"
              stroke-linecap="round"
              stroke-width="8"
            />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="226.978"
          height="226.978"
          viewBox="0 0 226.978 226.978"
          className={styles}>
          <path
            id="Path_1"
            data-name="Path 1"
            d="M105.09,86.228,162.55,28.9A13.418,13.418,0,1,0,143.575,9.926L86.249,67.386,28.922,9.926A13.417,13.417,0,0,0,9.947,28.9l57.46,57.326L9.947,143.554a13.418,13.418,0,1,0,18.975,18.975l57.326-57.46,57.327,57.46a13.418,13.418,0,1,0,18.975-18.975Z"
            transform="translate(113.482 -8.478) rotate(45)"
            fill="#848B9B"
          />
        </svg>
      )}
    </>
  );
}
