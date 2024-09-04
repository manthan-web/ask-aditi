
import Link from "next/link"

export default function FooterSection() {
  return (
    <footer className="bg-muted py-12 md:py-16 px-12 bg-zinc-100 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              {/* <MountainIcon className="h-6 w-6" /> */}
              <span className="text-lg font-bold">Acme Inc</span>
            </Link>
            <p className="text-sm text-muted-foreground">Providing innovative solutions for over a decade.</p>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Company</h4>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Products</h4>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Men
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Women
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Kids
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Resources</h4>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Community
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Support
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Legal</h4>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Contact</h4>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Support
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Sales
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Press
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }