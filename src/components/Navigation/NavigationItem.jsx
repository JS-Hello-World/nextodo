import { Button, styled } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationItem = ({
  label = 'Link',
  href = '/',
}) => {
  const pathname = usePathname();
  const isCurrentRoute = pathname === href;

  return (
    <Wrapper
      className={clsx(
        { 'NavigationItem--Active': isCurrentRoute }
      )}
    >
      <LinkElement
        href={href}
      >
        { label }
      </LinkElement>
    </Wrapper>
  );
};

const Wrapper = styled(Button)`
  width: 100%;
  justify-content: flex-start;
  text-transform: none;
  border-radius: 0;
  &.NavigationItem--Active {
    color: white;
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

const LinkElement = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 54px;
  color: inherit;
  padding: ${({ theme }) => theme.spacing(0, 2)};
`;
