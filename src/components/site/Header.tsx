"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { Container } from "./Container";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Rituals", href: "/rituals" },
  { name: "Collections", href: "/collections" },
  { name: "Stories", href: "/stories" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const focusableElements = mobileMenuRef.current?.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstElement.focus();

    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-cream-50/95 border-sand-200/30 sticky top-0 z-50 border-b backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              href="/"
              exact
              className="text-ink-900 hover:text-brand-700 px-0 font-serif text-xl font-bold"
            >
              LUNIVAAQ
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex md:items-center md:space-x-8"
            aria-label="Main navigation"
          >
            {navigationLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                exact={link.href === "/"}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <NavLink
              href="/shop"
              className="bg-brand-600 hover:bg-brand-700 focus:bg-brand-700 hidden rounded-lg px-4 py-2 font-medium text-white transition-colors duration-200 hover:text-white focus:text-white sm:inline-flex"
            >
              Shop Now
            </NavLink>

            {/* Mobile menu button */}
            <button
              ref={mobileMenuButtonRef}
              type="button"
              className="text-ink-700 hover:text-brand-600 hover:bg-sand-100 focus:ring-brand-500 inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:ring-offset-2 focus:outline-none md:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="bg-cream-50 border-sand-200/30 absolute top-full left-0 w-full border-b shadow-lg md:hidden"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                exact={link.href === "/"}
                className="block rounded-md px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              href="/shop"
              className="bg-brand-600 hover:bg-brand-700 focus:bg-brand-700 mt-4 block rounded-md px-3 py-2 text-base font-medium text-white hover:text-white focus:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
