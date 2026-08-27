const fs = require('fs');

let js = fs.readFileSync('site.js', 'utf8');

// 1. Disable connection lines and pin dots
js = js.replace(/createConnectionLine\(index\)\s*\{[\s\S]*?\n    \}/, `createConnectionLine(index) { return; }`);
js = js.replace(/updateLabels\(mesh,\s*index,\s*isActive\)\s*\{[\s\S]*?\n    \}/, `updateLabels(mesh, index, isActive) { return; }`);

// 2. Hide or remove buttonModel & background button meshes
js = js.replace(/this\.scene\.add\(this\.buttonModel,\s*this\.buttonPlane\);/, '// this.scene.add(this.buttonModel, this.buttonPlane);');
js = js.replace(/this\.scene\.add\(this\.linesGroup\);/, '// this.scene.add(this.linesGroup);');

fs.writeFileSync('site.js', js, 'utf8');
console.log('Successfully disabled pin lines, diamond dots, and background buttonModel!');
