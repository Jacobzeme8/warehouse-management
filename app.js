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
  if(packages.length == 0){
    packageRowTemplate = `
    <div class="col-12 border-green">
      <h1>There are no packages with the current filters</h1>
      <h3>please reset the filters and try again</h3>
    </div>
    `
    packageRow.innerHTML = packageRowTemplate
  }
}
drawPackages(packages)

function resetPackages(){
  packages = packagesBackup;
  drawPackages(packages)
}

//  SECTION fragile filters


function filterFragile(bool){
  let testFragile = packages.filter(package => package.isFragile == bool)
  packages = testFragile
  drawPackages(packages)
}

// SECTION priority filters

function filterByPriority(priority){
  let packagePriority = packages.filter(package => package.priorityLevel == priority)
  packages = packagePriority
  drawPackages(packages)
}


// SECTION weight filter

function filterWeight(weightOne, weightTwo){
  if(weightTwo == 0 && weightOne ==1){
   let weight = packages.filter(package => package.weight < weightOne)
   packages = weight
  drawPackages(packages)
  }
  else if(weightTwo == 0){
    let weight = packages.filter(package => package.weight > weightOne)
    packages = weight
    drawPackages(packages)
  }
  else{
    let weight = packages.filter(package => package.weight >= weightOne && package.weight <= weightTwo)
    packages = weight
    drawPackages(packages)
  }
}
