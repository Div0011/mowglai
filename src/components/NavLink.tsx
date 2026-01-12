import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className)}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
