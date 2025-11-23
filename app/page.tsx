'use client';

import HorizontalScroller from './components/layout/HorizontalScroller';
import CustomCursor from './components/layout/CustomCursor';
import IntroSection from './components/sections/IntroSection';
import SkillsLabSection from './components/sections/SkillsLabSection';
import ExperienceLedgerSection from './components/sections/ExperienceLedgerSection';
import ProjectsDashboardSection from './components/sections/ProjectsDashboardSection';
import ToolsSection from './components/sections/ToolsSection';
import BlogSection from './components/sections/BlogSection';
import ContactInvoiceSection from './components/sections/ContactInvoiceSection';

export default function Home() {
    return (
        <>
            <CustomCursor />
            <HorizontalScroller>
                <IntroSection />
                <SkillsLabSection />
                <ExperienceLedgerSection />
                <ProjectsDashboardSection />
                <ToolsSection />
                <BlogSection />
                <ContactInvoiceSection />
            </HorizontalScroller>
        </>
    );
}
