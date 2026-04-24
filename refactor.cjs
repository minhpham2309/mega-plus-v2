const fs = require('fs');
const path = require('path');

// 1. Create directories
['components/layout', 'components/ui', 'constants'].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 2. Define moves
const moves = {
    'components/Header.tsx': 'components/layout/Header.tsx',
    'components/Footer.tsx': 'components/layout/Footer.tsx',
    'components/SmoothScrollLayout.tsx': 'components/layout/SmoothScrollLayout.tsx',
    
    'components/AnimatedSection.tsx': 'components/ui/AnimatedSection.tsx',
    'components/CustomCursor.tsx': 'components/ui/CustomCursor.tsx',
    'components/GlobalEffects.tsx': 'components/ui/GlobalEffects.tsx',
    'components/LanguageToggle.tsx': 'components/ui/LanguageToggle.tsx',
    'components/LivingBackground.tsx': 'components/ui/LivingBackground.tsx',
    'components/Logo.tsx': 'components/ui/Logo.tsx',
    'components/Magnetic.tsx': 'components/ui/Magnetic.tsx',
    'components/ScrollLinkedAnimator.tsx': 'components/ui/ScrollLinkedAnimator.tsx',
    'components/ThemeToggle.tsx': 'components/ui/ThemeToggle.tsx',
    'components/Typewriter.tsx': 'components/ui/Typewriter.tsx',
};

// Execute moves
Object.entries(moves).forEach(([oldPath, newPath]) => {
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
    }
});

// 3. Update imports globally
function updateImports(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    const getRelPath = (from, to) => {
        let rel = path.relative(path.dirname(from), to);
        if (!rel.startsWith('.')) rel = './' + rel;
        return rel.replace(/\.tsx?$/, '');
    };

    Object.entries(moves).forEach(([oldPath, newPath]) => {
        const componentName = path.basename(oldPath, '.tsx');
        
        // Ensure we only replace imports, matching 'from ".../ComponentName"'
        const regex = new RegExp(`from\\s+['"]([^'"]*\\/?${componentName})['"]`, 'g');
        
        content = content.replace(regex, (match, p1) => {
            let newRel = getRelPath(filePath, newPath);
            // Quick fix to match backslashes if on windows, but we're standardizing on forward slashes
            newRel = newRel.replace(/\\/g, '/');
            return `from '${newRel}'`;
        });
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
    }
}

// glob all ts/tsx files
function glob(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('node_modules')) {
            results = results.concat(glob(file));
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const allFiles = glob('.');
allFiles.forEach(updateImports);

console.log("Refactoring directories and imports completed.");
