import { createEffect } from "solid-js";
import { CustomNavIcon } from "../../app";
import { setStore } from "../state/store";

export default function Kerstzwolle() {
  createEffect(() => {
    setStore("pageTitle", "Inschrijven Kerstzwolle");
  });

  return (
    <>
      <CustomNavIcon href="https://inschrijven.kerstzwolle.nl" src="/kerstzwolle.png" />
      <section class="xl:px-[20%] px-3 py-8">
        <div class="bg-white rounded-xl shadow-md p-6 mb-6">
          <img
            src="/kerstzwolle.png"
            alt="Inschrijven Kerstzwolle"
            class="w-full h-64 object-cover mb-6 rounded-lg"
          />

          <h1 class="text-3xl font-heading mb-4">Inschrijven Kerstzwolle</h1>

          <p class="text-lg text-zinc-700 mb-6">
            A volunteer coordination platform for Kerstpakkettenactie Zwolle, a charitable initiative
            that organizes the collection and distribution of Christmas boxes to households in Zwolle, the Netherlands.
          </p>

          <h2 class="text-2xl font-heading mb-3">Overview</h2>
          <p class="text-zinc-700 mb-4">
            Inschrijven Kerstzwolle is a volunteer registration and coordination platform built for the annual Kerstpakkettenactie (Christmas Box Action) in Zwolle.
            This charitable initiative brings together volunteers to collect, sort, and distribute Christmas packages to families in need throughout the Zwolle region.
            The platform streamlines the entire volunteer management process, allowing individuals to browse available shifts across multiple locations and activities,
            register for specific time slots, and track capacity in real-time.
            Built with Laravel and MariaDB, the system handles hundreds of volunteer registrations across multiple supermarkets and distribution centers,
            coordinating activities like collection, sorting, and transportation during the busy December holiday period.
            The platform supports both individual volunteers and groups, allows minors to participate with adult supervision,
            and provides organizers with comprehensive tools to manage the entire operation efficiently.
          </p>

          <h2 class="text-2xl font-heading mb-3">Technologies Used</h2>
          <div class="flex flex-wrap gap-2 mb-6">
            {[
              "laravel.png",
              "mariadb.png",
              "lando.svg",
              "php.png",
              "javascript.png",
              "codex.png",
            ].map((icon) => (
              <img
                src={`/${icon}`}
                alt=""
                class="size-12 rounded border border-zinc-200 object-contain p-1 bg-white"
              />
            ))}
          </div>

          <h2 class="text-2xl font-heading mb-3">Key Features</h2>
          <ul class="list-disc list-inside text-zinc-700 mb-4 space-y-2">
            <li>Improved volunteer selection interface with intuitive filtering and navigation</li>
            <li>Fast search functionality to quickly find specific shifts or locations</li>
            <li>Filter persistence - the system remembers your preferences across sessions</li>
            <li>Real-time capacity tracking for volunteer shifts showing availability (e.g., "1 / 4" slots filled)</li>
            <li>Multi-location support across various supermarkets and distribution centers in Zwolle</li>
            <li>Activity category filtering for collection, sorting, and transportation tasks</li>
            <li>Date and time slot selection for December 12-13, 2025 volunteer periods</li>
            <li>Group registration allowing multiple volunteers to sign up together</li>
            <li>Minor participation support with adult supervision requirements</li>
            <li>Login system for registered volunteers to manage their registrations</li>
            <li>Backup volunteer position management for reserve capacity</li>
            <li>Morning through evening shift scheduling across all locations</li>
            <li>Automated email notifications for registration confirmations</li>
            <li>Admin dashboard for organizers to manage shifts, locations, and volunteers</li>
            <li>Cookie consent management for analytics and functionality compliance</li>
          </ul>

          <h2 class="text-2xl font-heading mb-3">Development Process</h2>
          <p class="text-zinc-700 mb-4">
            The development of Inschrijven Kerstzwolle prioritized ease of use for volunteers and comprehensive management capabilities for organizers.
            Laravel provides the robust backend framework handling authentication, database management, and business logic for shift scheduling and capacity tracking.
            The registration flow was designed to be simple and intuitive—volunteers select their preferred activity category, location, date, and group size in just a few steps.
            Real-time capacity updates ensure volunteers can see immediately whether slots are available or full, preventing overbooking and coordination issues.
            The system handles complex scheduling logic, including time slot conflicts, capacity limits per location, and different requirements for various activity types.
            Lando provides a consistent development environment, ensuring all developers work with identical configurations.
            MariaDB stores volunteer registrations, shift details, location information, and capacity data with proper indexing for fast queries even during peak registration periods.
            JavaScript enhances the user interface with dynamic filtering, real-time updates, and smooth form interactions.
            The development was done in Codex (now Cursor) editor, providing AI-assisted code completion and refactoring capabilities.
            Email notifications were implemented using Laravel's mail system to confirm registrations and send reminders to volunteers.
            The admin dashboard provides organizers with full visibility into registration status, capacity utilization, and volunteer distribution across locations and time slots.
          </p>

          <h2 class="text-2xl font-heading mb-3">Challenges & Solutions</h2>
          <p class="text-zinc-700 mb-4">
            One significant challenge was managing concurrent registrations to prevent overbooking when multiple volunteers register for the same shift simultaneously.
            This was solved through database transactions and row-level locking, ensuring capacity checks and registration commits happen atomically.
            Coordinating across multiple locations with different capacity requirements and time slots required flexible data modeling that could accommodate varying schedules and activity types.
            The solution was a normalized database schema with separate tables for locations, activities, time slots, and registrations, connected through relationships that maintain referential integrity.
            Supporting group registrations while respecting capacity limits required careful validation logic—the system checks whether enough slots remain for the entire group before allowing registration.
            Email notification reliability was critical, as volunteers depend on confirmation emails for their registration details.
            This was addressed through Laravel's queue system, processing emails asynchronously with automatic retry logic for failed sends.
            The user interface needed to be accessible for volunteers of all ages and technical backgrounds, which guided design decisions toward simplicity and clarity over feature complexity.
          </p>

          <h2 class="text-2xl font-heading mb-3">Community Impact</h2>
          <p class="text-zinc-700 mb-4">
            Inschrijven Kerstzwolle plays a vital role in coordinating one of Zwolle's largest charitable initiatives during the holiday season.
            By streamlining volunteer registration and coordination, the platform enables organizers to efficiently manage hundreds of volunteers across multiple locations and time slots.
            This efficiency directly translates to more families receiving Christmas packages, as better coordination means smoother collection, sorting, and distribution operations.
            The real-time capacity tracking prevents volunteer shortages or oversaturation at any location, ensuring balanced workforce distribution throughout the event.
            Volunteers appreciate the simple registration process and clear communication about their shifts, leading to higher participation rates and better attendance.
            The platform has become an essential tool for the annual Kerstpakkettenactie, reducing administrative overhead for organizers while improving the experience for volunteers.
            By making it easy for community members to contribute their time, the system strengthens the charitable initiative's ability to serve families in need across Zwolle.
          </p>

          <h2 class="text-2xl font-heading mb-3">Recent Improvements</h2>
          <p class="text-zinc-700 mb-4">
            The platform recently received significant user experience enhancements focused on making volunteer selection faster and more intuitive.
            The new interface redesign streamlines the process of finding and selecting volunteer opportunities with improved filtering controls that feel responsive and natural.
            Search functionality was optimized for speed, using indexed database queries and intelligent caching to return results instantly even with hundreds of shifts.
            Filter state persistence was implemented using browser local storage, so volunteers don't have to re-select their preferences each time they visit—
            location preferences, activity types, and date filters are remembered across sessions, significantly improving the experience for returning volunteers.
            These improvements reduce friction in the registration process, making it easier for volunteers to find opportunities that match their availability and preferences.
          </p>

          <h2 class="text-2xl font-heading mb-3">Technical Highlights</h2>
          <p class="text-zinc-700 mb-4">
            The architecture separates volunteer-facing functionality from administrative tools, with public registration pages optimized for ease of use and admin dashboards
            providing comprehensive management capabilities.
            Database queries are optimized with proper indexing on frequently accessed fields like location, date, and capacity status, enabling instant search results.
            The registration flow includes progressive disclosure—volunteers see only relevant options at each step, reducing cognitive load.
            Filter state is persisted client-side using local storage, providing a seamless experience for returning users without additional server requests.
            Laravel's validation system ensures data integrity, rejecting invalid registrations and providing clear error messages.
            The system is designed to handle peak loads during registration opening periods, with caching strategies for frequently accessed data like location lists and available time slots.
            Automated testing covers critical paths like registration creation, capacity validation, and email sending, ensuring reliability during the high-stakes holiday period.
          </p>

          <div class="mt-8">
            <a
              href="https://inschrijven.kerstzwolle.nl"
              target="_blank"
              class="inline-flex items-center gap-2 bg-blue-500 text-white font-heading px-4 py-2 rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-100"
            >
              <i class="bi bi-box-arrow-up-right" />
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
