import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-column-gap: 1rem;
  grid-column-gap: 0.5rem;
  padding: 0.5rem;

  grid-template-columns: repeat(5, minmax(0, 1fr)); /* Default for mobile */

  @media (min-width: 640px) {
    grid-template-columns: repeat(6, minmax(0, 1fr)); /* Small screens (sm) */
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(8, minmax(0, 1fr)); /* Medium screens (md) */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(10, minmax(0, 1fr)); /* Large screens (lg) */
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(
      12,
      minmax(0, 1fr)
    ); /* Extra large screens (xl) */
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(
      16,
      minmax(0, 1fr)
    ); /* Extra extra large screens (2xl) */
  }
`;