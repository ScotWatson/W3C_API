/*
(c) 2023 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const initPageTime = performance.now();

const asyncWindow = new Promise(function (resolve, reject) {
  window.addEventListener("load", function (evt) {
    resolve(evt);
  });
});

(async function () {
  try {
    const modules = await Promise.all( [ asyncWindow ] );
    start(modules);
  } catch (e) {
    console.error(e);
    throw e;
  }
})();

async function start( [ evtWindow ] ) {
  try {
    function createRequest(endpoint) {
      return new Request("https://api.w3.org/" + endpoint, {
        method: "GET",
        headers: [],
        mode: "cors",
        credentials: "same-origin",
        cache: "default",
        redirect: "follow",
        referrer: "about:client",
        referrerPolicy: "",
        integrity: "",
        keepalive: "",
        signal: null,
        priority: "auto",
      });
    }
    function createPageDiv(resource, openItem) {
      let prevHref;
      let nextHref;
      const div = document.createElement("div");
      div.style.display = "block";
      div.style.position = "absolute";
      div.style.left = "0";
      div.style.top = "0";
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.backgroundColor = "grey";
      const btnClose = document.createElement("button");
      div.appendChild(btnClose);
      btnClose.addEventListener("click", function (evt) {
        div.remove();
      });
      const btnPrev = document.createElement("button");
      div.appendChild(btnPrev);
      btnPrev.addEventListener("click", function (evt) {
        btnPrev.disabled = true;
        btnNext.disabled = true;
        (async function () {
          await getPage(prevHref);
          btnPrev.disabled = false;
          btnNext.disabled = false;
        })();
      });
      const btnNext = document.createElement("button");
      div.appendChild(btnNext);
      btnNext.addEventListener("click", function (evt) {
        btnPrev.disabled = true;
        btnNext.disabled = true;
        (async function () {
          await getPage(nextHref);
          btnPrev.disabled = false;
          btnNext.disabled = false;
        })();
      });
      const divResults = document.createElement("div");
      div.appendChild(divResults);
      "translations"
      (async function getPage(newHref) {
        divResults.innerHTML = "";
        div.style.backgroundColor = "grey";
        const request = createRequest(newHref);
        const response = await fetch(request);
        const data = await response.json();
        div.style.backgroundColor = "white";
        for (const item of data._lists) {
          let divItem = document.createElement("div");
          divItem.width = "100%";
          for (const itemKey in item) {
            if (item.hasOwn(itemKey) && (itemKey != "href")) {
              const pItemData = document.createElement("p");
              divItem.appendChild(pItemData);
              pItemData.appendChild(document.createTextNode(pItemData + ": " + item[pItemData]));
            }
          }
          divItem.addEventListener("click", function (evt) {
            openItem(item.href);
          });
          divResults.appendChild(item);
        }
      })();
    }
    function loadPage() {
      
    }
    const btnGetTranslations = document.createElement("button");
    document.body.appendChild(btnGetTranslations);
    btnGetTranslations.appendChild(document.createTextNode("Get Translations"));
    btnGetTranslations.addEventListener("click", function (evt) {
    });
    const btnCallsForTranslation = document.createElement("button");
    document.body.appendChild(btnCallsForTranslation);
    btnGetCallsForTranslation.appendChild(document.createTextNode("Get Calls for Translation"));
    btnCallsForTranslation.addEventListener("click", function (evt) {
      (async function getCallsForTranslation() {
        const request = createRequest("callsfortranslation");
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
      })();
    });
    const btnGetEcosystems = document.createElement("button");
    document.body.appendChild(btnGetEcosystems);
    btnGetEcosystems.appendChild(document.createTextNode("Get Ecosystems"));
    btnGetEcosystems.addEventListener("click", function (evt) {
      (async function getEcosystems() {
        const request = createRequest("ecosystems");
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
      })();
    });
    const btnFunctions = document.createElement("button");
    document.body.appendChild(btnFunctions);
    btnGetFunctions.appendChild(document.createTextNode("Get Functions"));
    btnGetFunctions.addEventListener("click", function (evt) {
      (async function getFunctions() {
        const request = createRequest("functions");
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
      })();
    });
    const btnGetGroups = document.createElement("button");
    document.body.appendChild(btnGetGroups);
    btnGetGroups.appendChild(document.createTextNode("Get Groups"));
    btnGetGroups.addEventListener("click", function (evt) {
      (async function getGroups() {
        const request = createRequest("groups");
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
      })();
    });
    const btnGetNplcs = document.createElement("button");
    document.body.appendChild(btnGetNplcs);
    btnGetNplcs.appendChild(document.createTextNode("Get Nplcs"));
    btnGetNplcs.addEventListener("click", function (evt) {
      (async function getNplcs() {
        const request = createRequest("nplcs");
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
      })();
    });
    const btnGetSpecifications = document.createElement("button");
    document.body.appendChild(btnGetSpecifications);
    btnGetSpecifications.appendChild(document.createTextNode("Get Specifications"));
    btnGetSpecifications.addEventListener("click", function (evt) {
      (async function getSpecifications() {
        const request = createRequest("specifications");
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
      })();
    });
    const btnGetSpecificationSeries = document.createElement("button");
    document.body.appendChild(btnGetSpecificationSeries);
    btnGetSpecificationSeries.appendChild(document.createTextNode("Get Specification Series"));
    btnGetSpecificationSeries.addEventListener("click", function (evt) {
      (async function getSpecificationSeries() {
        const request = createRequest("specification-series");
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
      })();
    });
    const btnGetAffiliations = document.createElement("button");
    document.body.appendChild(btnGetAffiliations);
    btnGetAffiliations.appendChild(document.createTextNode("Get Affiliations"));
    btnGetAffiliations.addEventListener("click", function (evt) {
      (async function getAffiliations() {
        const request = createRequest("affiliations");
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
      })();
    });
/*
    (async function getDocJSON() {      const request = createRequest("doc.json");
      const response = await fetch(request);
      const data = await response.json();
      console.log(data);
    })();
    (async function getHealthCheck() {
      const request = createRequest("healthcheck");
      const response = await fetch(request);
      const data = await response.json();
      console.log(data);
    })();
*/
  } catch (e) {
    console.log(e);
  }
}
