"use strict";
exports.id = 257;
exports.ids = [257];
exports.modules = {

/***/ 5257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Meta.js


const Meta = ({ title , keywords , description , styleSheetExport  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8",
                lang: "en"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "https://th.bing.com/th/id/OIP.X1zV3XCMO_LhBSQBBAOWoQHaCJ?pid=ImgDet&w=1000&h=291&rs=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "https://th.bing.com/th/id/OIP.X1zV3XCMO_LhBSQBBAOWoQHaCJ?pid=ImgDet&w=1000&h=291&rs=1"
            }),
            styleSheetExport.fontAwesome && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
                rel: "stylesheet"
            })
        ]
    });
};
Meta.defaultProps = {
    title: "G chain",
    keywords: "security, findings, DevSecOps",
    description: "Security analysis tools for DevSecOps",
    styleSheetExport: {
        fontAwesome: true,
        googleFont: false,
        MDB: false,
        googleIcon: false
    }
};
/* harmony default export */ const components_Meta = (Meta);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Sidebar.js




function Sidebar({ currentRole  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-5eba47b280d0843a" + " " + "sidebar",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: ()=>router.push("/traders"),
                style: {
                    cursor: "pointer"
                },
                className: "jsx-5eba47b280d0843a" + " " + "title",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-5eba47b280d0843a" + " " + "img_container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            color: "green",
                            style: {
                                color: "green",
                                fontSize: "2.5rem"
                            },
                            className: "jsx-5eba47b280d0843a" + " " + "fas fa-link"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            marginLeft: "1.5rem",
                            fontSize: "1.75rem"
                        },
                        className: "jsx-5eba47b280d0843a",
                        children: "G chain"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-5eba47b280d0843a" + " " + "options",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "jsx-5eba47b280d0843a",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "jsx-5eba47b280d0843a",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/traders",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-5eba47b280d0843a" + " " + ((router.pathname.endsWith("traders") ? [
                                            "button",
                                            "active"
                                        ].join(" ") : "button") || ""),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-5eba47b280d0843a" + " " + "button_icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "jsx-5eba47b280d0843a" + " " + "far fa-building"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-5eba47b280d0843a",
                                                children: "Traders"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "jsx-5eba47b280d0843a",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "action",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-5eba47b280d0843a" + " " + ((router.pathname.endsWith("action") ? [
                                            "button",
                                            "active"
                                        ].join(" ") : "button") || ""),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-5eba47b280d0843a" + " " + "button_icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "jsx-5eba47b280d0843a" + " " + "fas fa-tools"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-5eba47b280d0843a",
                                                children: "Action"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-5eba47b280d0843a",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "profile",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    padding: "0"
                                },
                                className: "jsx-5eba47b280d0843a" + " " + ((router.pathname.endsWith("profile") ? [
                                    "button",
                                    "active"
                                ].join(" ") : "button") || ""),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-5eba47b280d0843a" + " " + "button_icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "jsx-5eba47b280d0843a" + " " + "fas fa-user-circle"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-5eba47b280d0843a",
                                        children: "Profile"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "5eba47b280d0843a",
                children: "ul.jsx-5eba47b280d0843a{margin:0;padding:0}li.jsx-5eba47b280d0843a{list-style:none}.sidebar.jsx-5eba47b280d0843a{background:#363740;color:#a4a6b3;min-width:12rem;max-width:12rem;z-index:1}.title.jsx-5eba47b280d0843a{font-size:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:5%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-column-gap:.2rem;-moz-column-gap:.2rem;column-gap:.2rem;margin:1.5rem 0 2.5rem 0}.img_container.jsx-5eba47b280d0843a{width:2.5rem;height:2.5rem;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden}img.jsx-5eba47b280d0843a{max-width:100%;min-height:100%}.options.jsx-5eba47b280d0843a{height:85%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.button.jsx-5eba47b280d0843a,.setting.jsx-5eba47b280d0843a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:0 0 0 1.5rem;height:2.8rem}.button.jsx-5eba47b280d0843a:hover,.setting.jsx-5eba47b280d0843a:hover{background:grey;cursor:pointer}.active.jsx-5eba47b280d0843a{border-left:2px solid#dde2ff;color:#dde2ff;r\n          }.button_icon.jsx-5eba47b280d0843a{width:1.5rem;height:1.5rem;text-aligh:center;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;color:inherit;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Layout.js





function Layout({ children , styleSheetExport , title , keywords , description , currentRole  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-4b79a778ddec390" + " " + "body",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Meta, {
                styleSheetExport: styleSheetExport,
                title: title,
                keywords: keywords,
                description: description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-4b79a778ddec390" + " " + "main_container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-4b79a778ddec390" + " " + "homepage_container",
                        children: children
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "4b79a778ddec390",
                children: "*.jsx-4b79a778ddec390{overflow:hidden}.body.jsx-4b79a778ddec390{height:100vh;overflow:hidden}.main_container.jsx-4b79a778ddec390{width:100vw;height:100%;background:#eee;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden}.homepage_container.jsx-4b79a778ddec390{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;background:#f7f8fc;overflow:hidden}"
            })
        ]
    });
}
Layout.defaultProps = {
    keywords: "Green Green Green",
    description: "Go Green",
    styleSheetExport: {
        fontAwesome: true,
        googleFont: false,
        MDB: false,
        googleIcon: false
    }
};


/***/ })

};
;