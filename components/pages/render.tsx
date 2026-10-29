import type { Locale } from "@/lib/locale";
import type { PageId } from "@/lib/routes";
import { AboutPage, JoinPage, SaferPage } from "@/components/pages/about";
import { ContactPage } from "@/components/pages/contact";
import { EventsPage } from "@/components/pages/events";
import { AccessibilityPage, PrivacyPage } from "@/components/pages/legal";
import { MembershipPage } from "@/components/pages/membership";
import { ProjectsPage } from "@/components/pages/projects";
import { SchoolPage } from "@/components/pages/school";
import { SpotsPage } from "@/components/pages/spots";

export function RenderPage({ locale, id }: { locale: Locale; id: PageId }) {
  switch (id) {
    case "events":
      return <EventsPage locale={locale} />;
    case "school":
      return <SchoolPage locale={locale} />;
    case "projects":
      return <ProjectsPage locale={locale} />;
    case "membership":
      return <MembershipPage locale={locale} />;
    case "about":
      return <AboutPage locale={locale} />;
    case "spots":
      return <SpotsPage locale={locale} />;
    case "safer":
      return <SaferPage locale={locale} />;
    case "join":
      return <JoinPage locale={locale} />;
    case "contact":
      return <ContactPage locale={locale} />;
    case "privacy":
      return <PrivacyPage locale={locale} />;
    case "accessibility":
      return <AccessibilityPage locale={locale} />;
  }
}
