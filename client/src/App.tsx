import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LangProvider } from "./contexts/LangContext";
import Home from "./pages/Home";
import SkillRedirect from "./pages/SkillRedirect";
import Kb from "./pages/Kb";
import KbConcepts from "./pages/KbConcepts";
import KbAssertions from "./pages/KbAssertions";
import Developers from "./pages/Developers";
import Mcp from "./pages/Mcp";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/skill.md"} component={SkillRedirect} />
      <Route path={"/kb"} component={Kb} />
      <Route path={"/kb/concepts"} component={KbConcepts} />
      <Route path={"/kb/assertions"} component={KbAssertions} />
      <Route path={"/developers"} component={Developers} />
      <Route path={"/mcp"} component={Mcp} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <LangProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LangProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
