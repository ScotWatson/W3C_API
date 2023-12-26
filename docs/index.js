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
    const btnGetTranslations = document.createElement("button");
    document.body.appendChild(btnGetTranslations);
    btnGetTranslations.addEventListener("click", function (evt) {
      
      (async function getTranslations() {
        const request = createRequest("translations");
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
      })();
    });
    const btnCallsForTranslation = document.createElement("button");
    document.body.appendChild(btnCallsForTranslation);
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
    btnFunctions.addEventListener("click", function (evt) {
      (async function getFunctions() {
        const request = createRequest("functions");
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
      })();
    });
    const btnGetGroups = document.createElement("button");
    document.body.appendChild(btnGetGroups);
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
