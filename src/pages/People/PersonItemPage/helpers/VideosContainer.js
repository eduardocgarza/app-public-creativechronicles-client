import styled from "styled-components";

export const VideosContainer = styled.section`
  display: grid;
  grid-column-gap: 1rem;
  grid-column-gap: 0.5rem;

  /* Default for mobile */
  grid-template-columns: repeat(1, minmax(0, 1fr));

  /* Small screens (sm) */
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 10px;
  }

  /* Medium screens (md) */
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  /* Large screens (lg) */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  /* Extra large screens (xl) */
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding-left: 40px;
    padding-right: 40px;
  }

  /* Extra extra large screens (2xl) */
  @media (min-width: 1536px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;
