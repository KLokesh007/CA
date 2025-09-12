[1mdiff --git a/app/layout.tsx b/app/layout.tsx[m
[1mindex b2e48b2..3bd348e 100644[m
[1m--- a/app/layout.tsx[m
[1m+++ b/app/layout.tsx[m
[36m@@ -4,7 +4,7 @@[m [mimport { Suspense } from "react"[m
 import "./globals.css"[m
 [m
 export const metadata: Metadata = {[m
[31m-  title: "MeenA - Chartered Accountant",[m
[32m+[m[32m  title: "Meena - Chartered Accountant",[m
   description: "Professional accounting services",[m
 }[m
 [m
[1mdiff --git a/components/Home/layout.tsx b/components/Home/layout.tsx[m
[1mindex 2901c70..07bb0af 100644[m
[1m--- a/components/Home/layout.tsx[m
[1m+++ b/components/Home/layout.tsx[m
[36m@@ -86,7 +86,14 @@[m [mexport default function HomeSection() {[m
               >[m
                 Connect With Me[m
               </button>[m
[31m-              <button className="secondary-btn">My resume</button>[m
[32m+[m[32m              <a[m
[32m+[m[32m                href="https://calendly.com/meenavenkatesh17/quick-sync"[m
[32m+[m[32m                target="_blank"[m
[32m+[m[32m                rel="noopener noreferrer"[m
[32m+[m[32m                className="secondary-btn"[m
[32m+[m[32m              >[m
[32m+[m[32m                Let's Sync[m
[32m+[m[32m              </a>[m
             </div>[m
           </div>[m
         </div>[m
