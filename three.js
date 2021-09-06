
var scene, camera, renderer; //база для рендеринга
//сцена, камера и средство визуализации
    var canvas; //канвас
    var dirLight; // направленный свет является глобальным 
    //и мы можем изменить его положение.
    var sun_angle = 0; // Угол (относительно оси Y) сферы//для солнца
    var ec_angle = 0;//для земли
    var m_angle = 0;//для луны
    var merc_angle = 0;//для меркурия
    var ven_angle = 0;//для венеры
    var mars_angle = 0;//для марса
    var jup_angle = 0;//для юпитера
    var sat_angle = 0;//для сатурна
    var ura_angle = 0;//для урана
    var nep_angle = 0;//для нептуна
    var plu_angle = 0;//для плутона

    var sunComp,
        earthComp,
        moonSphere,
        mercSphere,
        venSphere;
        marsSphere;
        jupSphere;
        satComp;
        uraSphere;
        nepSphere;

    function createSpheres(){
        
        // ----\/----СОЛНЕЧНАЯ СИСТЕМА-----------
        sphereSystem= new THREE.Object3D();//создаюм 3д объекты системы 
        scene.add(sphereSystem);//добавляем его на сцену

        // ------------СОЛНЦЕ-------------
        sunComp = new THREE.Object3D(); // солнышко
        scene.add(sunComp);//добавляем на сцену
        // set up the sphere vars
        var sunRadius = 40,//радиус солнышка
            sunSegments = 20,
            sunRings = 20;
        // создаем геометрию для солнца с помощью 
        //радиуса сферы, горизонтальных сегментов и вертикальных сегментов
        var sunGeometry = new THREE.SphereGeometry(sunRadius, sunSegments, sunRings);
      
        THREE.ImageUtils.crossOrigin = '';//подготавливаем геометрию для наложения текстуры
        var sunTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/YENh2LF.jpg');//загружаем текстуру
        var sunMaterial = new THREE.MeshLambertMaterial({ map: sunTexture, opacity: 0.6, transparent: true });//материал сетка ламберта(из ху)
        //вобщем накладываем на сетку текстуру картинку с соотв прозрачностью
        sunSphere = new THREE.Mesh(sunGeometry, sunMaterial);//создаем объект Mesh c нужной нам геометрией и текстурой
        sunComp.add(sunSphere);//добавляем на сцену
        var sunLight = new THREE.PointLight( 0xffffff, 2, 0 );//свет из одной точки
        sunLight.position.set( 0,0,0 );//задаем ему координаты
        sunComp.add(sunLight);//добавляем в солнышко
        sphereSystem.add(sunComp);//добавляем солнечную систему
        // ----------------------------
        //-------------ЗЕМЛЯ-----------
        earthComp = new THREE.Object3D(); // компоненты земли
        //задаем характеристики сферы
        var earthRadius = 8,
            earthSegments = 20,
            earthRings = 20;
        // создаем материал сферы
        var earthGeometry = new THREE.SphereGeometry(earthRadius, earthSegments, earthRings);//геометрия для объекта земл
        var earthTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/OmdRtZ3.jpg');////загружаем текстуру
        var earthMaterial = new THREE.MeshLambertMaterial({ map: earthTexture });//накладываем на сетку текстуру картинку
        earthSphere = new THREE.Mesh(earthGeometry, earthMaterial);//создаем объект Mesh c нужной нам геометрией и текстурой
        earthSphere.position.set(0,0,0);
        earthComp.add(earthSphere);//компоненты земли помещаем в сферу земли
        //-----\/------ЛУНА------------
        // set up the sphere var 
        var moonRadius = 4,
            moonSegments = 20,
            moonRings = 20;
        // 
        var moonGeometry = new THREE.SphereGeometry(moonRadius, moonSegments, moonRings);
        var moonTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/1GQHXhg.png');
        var moonMaterial = new THREE.MeshLambertMaterial({ map: moonTexture });
        moonSphere = new THREE.Mesh(moonGeometry, moonMaterial);
        moonSphere.position.set(0,0,0);
        earthComp.add(moonSphere);
        sphereSystem.add(earthComp);
        // ----------------------------
        // ----------МЕРКУРИЙ-----------
        var mercRadius = 2,
            mercSegments = 20,
            mercRings = 20;
        // 
        var mercGeometry = new THREE.SphereGeometry(mercRadius, mercSegments, mercRings);
        var mercTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/kBW0cY9.jpg');
        var mercMaterial = new THREE.MeshLambertMaterial({ map: mercTexture });
        mercSphere = new THREE.Mesh(mercGeometry, mercMaterial);
        mercSphere.position.set(0,0,0);
        sphereSystem.add(mercSphere);
        // ----------------------------
        // -----------ВЕНЕРА------------
        var venRadius = 7,
            venSegments = 20,
            venRings = 20;
        // 
        var venGeometry = new THREE.SphereGeometry(venRadius, venSegments, venRings);
        var venTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/5nZ1X3O.gif');
        var venMaterial = new THREE.MeshLambertMaterial({ map: venTexture });
        venSphere = new THREE.Mesh(venGeometry, venMaterial);
        venSphere.position.set(0,0,0);
        sphereSystem.add(venSphere);
        // ----------------------------
        // -----------МАРС-------------
        var marsRadius = 5,
            marsSegments = 20,
            marsRings = 20;
        // 
        var marsGeometry = new THREE.SphereGeometry(marsRadius, marsSegments, marsRings);
        var marsTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/7EJJowT.jpg');
        var marsMaterial = new THREE.MeshLambertMaterial({ map: marsTexture });
        marsSphere = new THREE.Mesh(marsGeometry, marsMaterial);
        marsSphere.position.set(0,0,0);
        sphereSystem.add(marsSphere);
        // ----------------------------
        // ----------ЮПИТЕР-----------
        var jupRadius = 12,
            jupSegments = 20,
            jupRings = 20;
        // 
        var jupGeometry = new THREE.SphereGeometry(jupRadius, jupSegments, jupRings);
        var jupTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/Pwo6fGV.jpg');
        var jupMaterial = new THREE.MeshLambertMaterial({ map: jupTexture });
        jupSphere = new THREE.Mesh(jupGeometry, jupMaterial);
        jupSphere.position.set(0,0,0);
        sphereSystem.add(jupSphere);
        // ----------------------------
        //-----------САТУРН------------
        satComp = new THREE.Object3D(); //
        // set up the sphere vars
        var satRadius = 10,
            satSegments = 20,
            satRings = 20;
        // 
        var satGeometry = new THREE.SphereGeometry(satRadius, satSegments, satRings);
        var satTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/2IdZlKQ.jpg');
        var satMaterial = new THREE.MeshLambertMaterial({ map: satTexture });
        satSphere = new THREE.Mesh(satGeometry, satMaterial);
        satSphere.position.set(0,0,0);
        satComp.add(satSphere);
        // //-----\/----КОЛЬЦА САТУРНА---------
        // set up the torus vars
        var rngRadius = 18,
            rngTube = 2;
            rngSegments = 20,
            rngTubularSegments = 20;
            rngArc = Math.PI *2;
        var rngGeometry = new THREE.TorusGeometry(rngRadius,rngTube, rngSegments, rngTubularSegments, rngArc);
        //эта геометрия создаст типа пончик с дырочкой

        var rngTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/sJI4JPv.jpg');//подгружаем текстурку
        var rngMaterial = new THREE.MeshBasicMaterial( { map: rngTexture } );
        var rng = new THREE.Mesh( rngGeometry, rngMaterial );
        rng.rotation.x=1.2;//Локальное вращение объекта которое будет относительно компонентов сатурна - так как мы поместим пончик туда
        satComp.add(rng);//помещаем пончик в компоненты сатурна
        sphereSystem.add(satComp);//помещаем компоненты сатурна в систему
        //----------------------------
        // ----------УРАН-----------
        var uraRadius = 7.5,
            uraSegments = 20,
            uraRings = 20;
        // create the sphere's material
        var uraGeometry = new THREE.SphereGeometry(uraRadius, uraSegments, uraRings);
        var uraTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/iwyhRRY.jpg');
        var uraMaterial = new THREE.MeshLambertMaterial({ map: uraTexture });
        uraSphere = new THREE.Mesh(uraGeometry, uraMaterial);
        uraSphere.position.set(0,0,0);
        sphereSystem.add(uraSphere);
        // ----------------------------
        // ----------НЕПТУН-----------
        var nepRadius = 8,
            nepSegments = 20,
            nepRings = 20;
        // create the sphere's material
        var nepGeometry = new THREE.SphereGeometry(nepRadius, nepSegments, nepRings);
        var nepTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/Qz02Bot.jpg');
        var nepMaterial = new THREE.MeshLambertMaterial({ map: nepTexture });
        nepSphere = new THREE.Mesh(nepGeometry, nepMaterial);
        nepSphere.position.set(0,0,0);
        sphereSystem.add(nepSphere);
        // ----------------------------
        // -----------ПЛУТОН------------
        var pluRadius = 1,
            pluSegments = 20,
            pluRings = 20;
        // create the sphere's material
        var pluGeometry = new THREE.SphereGeometry(pluRadius, pluSegments, pluRings);
        var pluTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/jBswxj0.jpg');
        var pluMaterial = new THREE.MeshLambertMaterial({ map: pluTexture });
        pluSphere = new THREE.Mesh(pluGeometry, pluMaterial);
        pluSphere.position.set(0,0,0);
        sphereSystem.add(pluSphere);
        // ----------------------------
    }

    function createWorld() {
        
        renderer.setClearColor(0); // устанавливаем черный цвет фона
        scene = new THREE.Scene(); // создаем сцену, куда будем добавлять наши планетки
 
        camera = new THREE.PerspectiveCamera(55, canvas.width/canvas.height, 0.1, 1000);//создаем камеру
        camera.position.z = 300; // отодвигаем камеру
        camera.position.y = 450;
        camera.rotation.x = -1;

        var rightLight = new THREE.DirectionalLight( 0xffffff, 1 );//направленный свет
        rightLight.position.set( 1.5, 2, 0 );//устанавливаем позицию на сцене для него
        scene.add( rightLight );//и запихиваем на сцену

        var leftLight = new THREE.DirectionalLight( 0xffffff, 0.5 );//создаем еще один свет только слева
        leftLight.position.set( 0, -1, 1 );
        scene.add( leftLight );

        createSpheres();//создаем планетки
}

    // функция визуализации сцены и анимации(вращение планеток)
    function render() {
        requestAnimationFrame( render );

        sunComp.rotation.y=sun_angle;
        sun_angle  += 0.04;

        earthComp.position.x=Math.cos(ec_angle)*120;//позиционирование планетки
        earthComp.position.z=Math.sin(ec_angle)*120;
        earthComp.rotation.y=ec_angle;
        ec_angle  += 0.01;

        earthComp.position.x=Math.cos(ec_angle)*120;
        earthComp.position.z=Math.sin(ec_angle)*120;

        moonSphere.position.x=Math.cos(m_angle)*20;
        moonSphere.position.z=Math.sin(m_angle)*20;
        moonSphere.rotation.y=m_angle;
        m_angle  -= 0.01;

        mercSphere.position.x=Math.cos(ec_angle)*55;
        mercSphere.position.z=Math.sin(ec_angle)*55;
        mercSphere.rotation.y=merc_angle;
        merc_angle  += 0.03;

        venSphere.position.x=Math.cos(ven_angle)*80;
        venSphere.position.z=Math.sin(ven_angle)*80;
        venSphere.rotation.y=ven_angle;
        ven_angle  += 0.02;

        marsSphere.position.x=Math.cos(mars_angle)*155;
        marsSphere.position.z=Math.sin(mars_angle)*155;
        marsSphere.rotation.y=mars_angle;
        mars_angle  += 0.005;

        jupSphere.position.x=Math.cos(jup_angle)*185;
        jupSphere.position.z=Math.sin(jup_angle)*185;
        jupSphere.rotation.y=ven_angle;
        jup_angle  += 0.001;

        satComp.position.x=Math.cos(sat_angle)*230;
        satComp.position.z=Math.sin(sat_angle)*230;
        satComp.rotation.y=ven_angle;
        sat_angle  += 0.0008;

        uraSphere.position.x=Math.cos(ura_angle)*280;
        uraSphere.position.z=Math.sin(ura_angle)*280;
        uraSphere.rotation.y=ven_angle;
        ura_angle  += 0.0005;

        nepSphere.position.x=Math.cos(nep_angle)*300;
        nepSphere.position.z=Math.sin(nep_angle)*300;
        nepSphere.rotation.y=ven_angle;
        nep_angle  += 0.0003;

        pluSphere.position.x=Math.cos(plu_angle)*320;
        pluSphere.position.z=Math.sin(plu_angle)*320;
        pluSphere.rotation.y=ven_angle;
        plu_angle  += 0.0001;

        renderer.render(scene, camera);
    }

    //----------------------------------------------------------------------------------

    //
    function init() {
        try {
            canvas = document.getElementById("glcanvas");
            renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true} );
        }
        catch (e) {
            document.getElementById("canvas-holder").innerHTML = "<h3><b>WebGL is not available.</b><h3>";
            return;
        }
    
        //создаем все пространство и рендерим
        createWorld();
        render();
    }



