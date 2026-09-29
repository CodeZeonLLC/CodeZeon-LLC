import {
  LuPalette,
  LuFingerprint,
  LuShare2,
  LuPackage,
  LuLayers,
  LuImage,
  LuClapperboard,
  LuSparkles,
  LuFilm,
  LuBox,
  LuMonitor,
  LuSmartphone,
  LuLayoutDashboard,
  LuGamepad2,
  LuGlobe,
  LuAppWindow,
  LuSearch,
  LuYoutube,
  LuMapPin,
  LuMessagesSquare,
  LuNetwork,
  LuCalculator,
  LuUsers,
  LuBriefcase,
  LuCalendarCheck,
  LuClipboardCheck,
  LuStore,
  LuGift,
  LuTicket,
  LuShoppingCart,
  LuTruck,
  LuRefreshCw,
  LuListTodo,
  LuChartColumnIncreasing,
  LuClipboardList,
  LuFileChartColumn,
  LuGraduationCap,
  LuFileBadge,
  LuBuilding2,
  LuHospital,
  LuSchool,
  LuFactory,
  LuHouse,
} from "react-icons/lu";

const iconClass = "h-5 w-5";

const iconsByTitle = {
  "Logo Design": <LuFingerprint className={iconClass} aria-hidden="true" />,
  "Brand Identity & Guidelines": (
    <LuPalette className={iconClass} aria-hidden="true" />
  ),
  "Social Media Creative Design": (
    <LuShare2 className={iconClass} aria-hidden="true" />
  ),
  "Packaging Design": <LuPackage className={iconClass} aria-hidden="true" />,
  "Social Media Brand Kits": (
    <LuLayers className={iconClass} aria-hidden="true" />
  ),
  "Thumbnail Design": <LuImage className={iconClass} aria-hidden="true" />,
  "Raw Footage Editing": (
    <LuClapperboard className={iconClass} aria-hidden="true" />
  ),
  "Motion Graphics": <LuSparkles className={iconClass} aria-hidden="true" />,
  "2D Animation": <LuFilm className={iconClass} aria-hidden="true" />,
  "3D Animation": <LuBox className={iconClass} aria-hidden="true" />,
  "Website UI Design": <LuMonitor className={iconClass} aria-hidden="true" />,
  "Mobile App UI Design": (
    <LuSmartphone className={iconClass} aria-hidden="true" />
  ),
  "Dashboard Interface Design": (
    <LuLayoutDashboard className={iconClass} aria-hidden="true" />
  ),
  "Gaming UI Design": <LuGamepad2 className={iconClass} aria-hidden="true" />,
  "Website Design & Development": (
    <LuGlobe className={iconClass} aria-hidden="true" />
  ),
  "Mobile App Development": (
    <LuAppWindow className={iconClass} aria-hidden="true" />
  ),
  "Website SEO": <LuSearch className={iconClass} aria-hidden="true" />,
  "YouTube SEO": <LuYoutube className={iconClass} aria-hidden="true" />,
  "Google Business Profile Setup": (
    <LuMapPin className={iconClass} aria-hidden="true" />
  ),
  "Social Media Page Development": (
    <LuMessagesSquare className={iconClass} aria-hidden="true" />
  ),
  "ERP System": <LuNetwork className={iconClass} aria-hidden="true" />,
  "Accounting Software": (
    <LuCalculator className={iconClass} aria-hidden="true" />
  ),
  "CRM System": <LuUsers className={iconClass} aria-hidden="true" />,
  "HR & Payroll Management System": (
    <LuBriefcase className={iconClass} aria-hidden="true" />
  ),
  "Employee Attendance System": (
    <LuCalendarCheck className={iconClass} aria-hidden="true" />
  ),
  "Performance Evaluation System": (
    <LuClipboardCheck className={iconClass} aria-hidden="true" />
  ),
  "Point of Sale (POS) System": (
    <LuStore className={iconClass} aria-hidden="true" />
  ),
  "Loyalty & Rewards Program System": (
    <LuGift className={iconClass} aria-hidden="true" />
  ),
  "Client Feedback & Support Ticket System": (
    <LuTicket className={iconClass} aria-hidden="true" />
  ),
  "E-commerce Website or App": (
    <LuShoppingCart className={iconClass} aria-hidden="true" />
  ),
  "Order & Delivery Management System": (
    <LuTruck className={iconClass} aria-hidden="true" />
  ),
  "Subscription or Membership System": (
    <LuRefreshCw className={iconClass} aria-hidden="true" />
  ),
  "Project & Task Management Tool": (
    <LuListTodo className={iconClass} aria-hidden="true" />
  ),
  "Business Intelligence Dashboard": (
    <LuChartColumnIncreasing className={iconClass} aria-hidden="true" />
  ),
  "Data Collection & Survey System": (
    <LuClipboardList className={iconClass} aria-hidden="true" />
  ),
  "Custom Reporting Tools": (
    <LuFileChartColumn className={iconClass} aria-hidden="true" />
  ),
  "Learning Management System (LMS)": (
    <LuGraduationCap className={iconClass} aria-hidden="true" />
  ),
  "Online Exam & Certification System": (
    <LuFileBadge className={iconClass} aria-hidden="true" />
  ),
  "Corporate Training Portal": (
    <LuBuilding2 className={iconClass} aria-hidden="true" />
  ),
  "Hospital Management System (HMS)": (
    <LuHospital className={iconClass} aria-hidden="true" />
  ),
  "School/College Management System": (
    <LuSchool className={iconClass} aria-hidden="true" />
  ),
  "Garments/Factory Production Management System": (
    <LuFactory className={iconClass} aria-hidden="true" />
  ),
  "Real Estate/Property Management System": (
    <LuHouse className={iconClass} aria-hidden="true" />
  ),
};

function formatIndex(index) {
  return String(index + 1).padStart(2, "0");
}

export default function OfferingGrid({ offerings }) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {offerings.map((item, index) => (
        <li
          key={item.title}
          className="border border-line bg-cream-dim/40 p-6 sm:p-7"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
              {iconsByTitle[item.title] ?? (
                <LuLayers className={iconClass} aria-hidden="true" />
              )}
            </span>
            <span className="font-mono text-sm text-muted">
              {formatIndex(index)}
            </span>
          </div>
          <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-brand">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
