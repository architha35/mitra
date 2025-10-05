import * as React from "react";
import { Github, MessagesSquare } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThreadList } from "@/components/assistant-ui/thread-list";

export function ThreadListSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="aui-sidebar-header mb-3 border-b border-sidebar-border/50 bg-gradient-to-br from-sidebar/80 to-sidebar/60 backdrop-blur-sm">
        <div className="aui-sidebar-header-content flex items-center justify-between px-3 py-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" className="hover:bg-sidebar-accent/30 transition-colors duration-200 rounded-xl">
                <div className="aui-sidebar-header-icon-wrapper flex aspect-square size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg">
                  <MessagesSquare className="aui-sidebar-header-icon size-5" />
                </div>
                <div className="aui-sidebar-header-heading ml-4 flex flex-col gap-0.5 leading-none">
                  <span className="aui-sidebar-header-title font-bold text-lg bg-gradient-to-r from-sidebar-foreground to-sidebar-foreground/80 bg-clip-text text-transparent">
                    Mitra
                  </span>
                  <span className="text-sm text-sidebar-foreground/70 font-medium">
                    Mitra
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarHeader>
      <SidebarContent className="aui-sidebar-content px-2">
        <ThreadList />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter className="aui-sidebar-footer border-t border-sidebar-border/50 bg-gradient-to-t from-sidebar/40 to-sidebar/20 backdrop-blur-sm p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-sidebar-accent/20 transition-colors duration-200 rounded-xl">
              <a
                href="https://github.com/architha35"
                target="_blank"
                rel="noopener noreferrer"
                className="smooth-text"
              >
                <div className="aui-sidebar-footer-icon-wrapper flex aspect-square size-9 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-secondary-foreground shadow-lg">
                  <Github className="aui-sidebar-footer-icon size-4" />
                </div>
                <div className="aui-sidebar-footer-heading ml-3 flex flex-col gap-0.5 leading-none">
                  <span className="aui-sidebar-footer-title font-semibold text-sidebar-foreground">
                    GitHub
                  </span>
                  <span className="text-xs text-sidebar-foreground/70">View Source</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
