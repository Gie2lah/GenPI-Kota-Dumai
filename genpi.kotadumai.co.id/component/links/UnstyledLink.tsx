import clsx from "clsx";
import Link, { LinkProps } from "next/link";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: any;
} & React.ComponentPropsWithoutRef<"a"> &
  LinkProps;

const UnstyledLink = ({
  children,
  href,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) => {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith("/") && !href.startsWith("#");

  if (!isNewTab) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener norefrrer"
      {...rest}
      className={clsx(className, "cursor-newtab")}
    >
      {children}
    </Link>
  );
};

export default UnstyledLink;
