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