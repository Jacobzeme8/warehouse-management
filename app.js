let packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

const packagesBackup = [
  {
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
  },
  {
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
  },
  {
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
  }
]

function drawPackages(array){
  let packageRow = document.getElementById("package-row")
  let packageRowTemplate = ``
  array.forEach(package => packageRowTemplate +=`
        <div class="col-6 border-green">
          <h1>To: ${package.to}</h1>
          <h3>tracking number: ${package.trackingNumber}</h3>
          <h3>fragile: ${package.isFragile}</h3>
          <h3>Weight: ${package.weight}</h3>
          <h3>Priority Level: ${package.priorityLevel}</h3>
        </div>`)
      packageRow.innerHTML = packageRowTemplate
  // if(packages = undefined){
  //   packageRowTemplate = `
  //   <div class="col-12 border-green">
  //     <h1>There are no packages with the current filters</h1>
  //     <h3>please reset the filters and try again</h3>
  //   </div>
  //   `
  //   packageRow.innerHTML = packageRowTemplate
  // }
}
drawPackages(packages)

function resetPackages(){
  packages = packagesBackup;
  drawPackages(packages)
}

//  SECTION fragile filters

function filterByFragile(){
  let fragilePackages = packages.filter(package => package.isFragile)
  packages = fragilePackages
  drawPackages(packages)
}

function filterByNonFragile(){
  let nonFragile = packages.filter(package => !package.isFragile)
  packages = nonFragile
  drawPackages(packages)
}

// SECTION priority filters

function filterByFree(){
  let freePriority = packages.filter(package => package.priorityLevel == "free")
  packages = freePriority
  drawPackages(packages)
}

function filterByStandard(){
  let standardPriority = packages.filter(package => package.priorityLevel == "standard")
  packages = standardPriority
  drawPackages(packages)
}

function filterByPriority(){
  let expressPriority = packages.filter(package => package.priorityLevel == "express")
  packages = expressPriority
  drawPackages(packages)
}

// SECTION weight filter

function filterByLowWeight(){
  let lowWeight = packages.filter(package => package.weight < 1)
  packages = lowWeight
  drawPackages(packages)
}

function filterByMidWeight(){
  let midWeight = packages.filter(package => package.weight >= 1 && package.weight <= 10)
  packages = midWeight
  drawPackages(packages)
}

function filterByHighWeight(){
  let highWeight = packages.filter(package => package.weight > 10)
  packages = highWeight
  drawPackages(packages)
}