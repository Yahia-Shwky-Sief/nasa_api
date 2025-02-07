function analyzeAsteroids(asteroidData) {
    let totalDiameter = 0;
    let totalCount = 0;
    asteroidData.forEach(asteroid => {
        if (asteroid.estimated_diameter && asteroid.estimated_diameter.km) {
            totalDiameter += asteroid.estimated_diameter.km;
            totalCount++;
        }
    });

    const averageDiameter = totalCount > 0 ? (totalDiameter / totalCount) : 0;

    console.log(`Total number of asteroids: ${totalCount}`);
    console.log(`Average diameter of asteroids: ${averageDiameter.toFixed(2)} km`);
}

analyzeAsteroids("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY");
