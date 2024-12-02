var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
console.log("Resume generation started...");
var resForm = document.getElementById("resForm");
var resPage = document.getElementById("resPage");
var resumeImage = document.getElementById("resumeImage");
var resumeAddress = document.getElementById("resumeAddress");
var resumeExperience = document.getElementById("resumeExperience");
var resumeLanguage = document.getElementById("resumeLanguage");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeEducation = document.getElementById("resumeEducation");
var resumeSkills = document.getElementById("resumeSkills");
resForm.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, email, number, education, address, language, skills, work, imageInput, imageFile, imageBase64, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name = document.getElementById("name").value;
                email = document.getElementById("email").value;
                number = document.getElementById("number").value;
                education = document.getElementById("education").value;
                address = document.getElementById("address").value;
                language = document.getElementById("language").value;
                skills = document.getElementById("skills").value;
                work = document.getElementById("work").value;
                imageInput = document.getElementById("image");
                imageFile = imageInput.files ? imageInput.files[0] : null;
                imageBase64 = '';
                if (!imageFile) return [3 /*break*/, 4];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, convertToBase64(imageFile)];
            case 2:
                imageBase64 = _b.sent();
                localStorage.setItem("resumeImage", imageBase64);
                resumeImage.src = imageBase64;
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error("Error converting Image to Base64", error_1);
                return [3 /*break*/, 4];
            case 4:
                (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                ;
                resPage.classList.remove("hidden");
                resumeAddress.textContent = address;
                resumeName.textContent = name;
                resumeEmail.textContent = email;
                resumePhone.textContent = number;
                resumeExperience.innerHTML = work.split(",").map(function (wo) { return "<li>".concat(wo, "</li>"); }).join("");
                resumeLanguage.innerHTML = language.split(",").map(function (lang) { return "<li>".concat(lang, "</li>"); }).join("");
                resumeEducation.innerHTML = education.split(",").map(function (ed) { return "<li>".concat(ed.trim(), "</li>"); }).join("");
                resumeSkills.innerHTML = skills.split(",").map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join("");
                return [2 /*return*/];
        }
    });
}); });
function convertToBase64(file) {
    return new Promise(function (res, rej) {
        var reader = new FileReader();
        reader.onloadend = function () { return res(reader.result); };
        reader.onerror = rej;
        reader.readAsDataURL(file);
    });
}
