import fs from 'fs';
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulp from 'gulp'
export const otfToTtf = () => {
	// Ищем файлы шрифтов .otf
	return gulp.src(`./src/fonts/*.otf`, {})
		.pipe(plumber(
			notify.onError({
				title: "FONTS",
				message: "Error: <%= error.message %>"
			}))
		)
		// Конвертируем в .ttf
		.pipe(fonter({
			formats: ['ttf']
		}))
		// Выгружаем в исходную папку
		.pipe(gulp.dest(`./src/fonts/`))
}
export const ttfToWoff = () => {
	// Ищем файлы шрифтов .ttf
	return gulp.src(`./src/fonts/*.ttf`, {})
		.pipe(plumber(
			notify.onError({
				title: "FONTS",
				message: "Error: <%= error.message %>"
			}))
		)
		// Конвертируем в .woff
		.pipe(fonter({
			formats: ['woff']
		}))
		// Выгружаем в папку с результатом
		.pipe(gulp.dest(`./src/fonts/`))
		// Ищем файлы шрифтов .ttf
		.pipe(gulp.src(`./src/fonts/*.ttf`))
		// Конвертируем в .woff2
		.pipe(ttf2woff2())
		// Выгружаем в папку с результатом
		.pipe(gulp.dest(`./src/fonts/`))
		
	
}
export const fonstStyle = () => {
	let fontsFile = './src/styles/fonts.scss';
	// Если передан флаг --rewrite удаляем файл подключения шрифтов
	//app.isFontsReW ? fs.unlink(fontsFile, cb) : null;
	// Проверяем существуют ли файлы шрифтов
	fs.readdir('./src/fonts/', function (err, fontsFiles) {
		if (fontsFiles) {
			// Проверяем существует ли файл стилей для подключения шрифтов
			if (!fs.existsSync(fontsFile)) {
				// Если файла нет, создаем его
				fs.writeFileSync(fontsFile, '');
				let newFileOnly;
				for (var i = 0; i < fontsFiles.length; i++) {
					// Записываем подключения шрифтов в файл стилей
					let fontFileName = fontsFiles[i].split('.')[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
						let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
						if (fontWeight.toLowerCase() === 'thin') {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase() === 'extralight') {
							fontWeight = 200;
						} else if (fontWeight.toLowerCase() === 'light') {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase() === 'medium') {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase() === 'semibold') {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase() === 'bold') {
							fontWeight = 700;
						} else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
							fontWeight = 800;
						} else if (fontWeight.toLowerCase() === 'black') {
							fontWeight = 900;
						} else {
							fontWeight = 400;
						}
						fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
						newFileOnly = fontFileName;
					}
				}
			} else {
				// Если файл есть, выводим сообщение
				console.log("Файл scss/fonts/fonts.scss уже существует. Для обновления файла нужно его удалить!");

			}
		} else {
			// Если шрифтов нет
			fs.unlink(fontsFile, cb)
		}
	});
	return true;
}
export const gitignore = () => {
	if (!fs.existsSync('.gitignore')) {
		fs.writeFile('./.gitignore', '', cb);
		fs.appendFile('./.gitignore', 'phpmailer/\r\n', cb);
		fs.appendFile('./.gitignore', 'package-lock.json\r\n', cb);
		fs.appendFile('./.gitignore', 'flsStartTemplate/\r\n', cb);
		fs.appendFile('./.gitignore', 'node_modules/\r\n', cb);
		fs.appendFile('./.gitignore', '.gitignore\r\n', cb);
		fs.appendFile('./.gitignore', 'dist/\r\n', cb);
		fs.appendFile('./.gitignore', 'Source/\r\n', cb);
		fs.appendFile('./.gitignore', 'version.json\r\n', cb);
		fs.appendFile('./.gitignore', app.buildFolder + '\r\n', cb);
		fs.appendFile('./.gitignore', '**/*.zip\r\n', cb);
		fs.appendFile('./.gitignore', '**/*.rar\r\n', cb);
		//if (projectName !== 'flsStart') del('./.git/');
	}
	return true;
}

function cb() { }
const fonts = gulp.series(otfToTtf,ttfToWoff,fonstStyle);
const devTasks = gulp.parallel(fonts, gitignore);
const development = gulp.series(devTasks);
gulp.task('default', development);