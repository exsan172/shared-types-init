const { execSync } = require("child_process");
const repoUrl      = "https://github.com/exsan172/shared-types.git";

try {
    execSync(`git clone ${repoUrl} shared-types`, { stdio: "inherit" });
    process.chdir("shared-types");
    execSync("rm -rf .git", { stdio: "inherit" });
    console.log("✅ Shared types init successfully.");

} catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
}