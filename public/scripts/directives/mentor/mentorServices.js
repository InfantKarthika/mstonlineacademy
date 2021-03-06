angular.module('myAdminApp').factory('mentorServices', function ($http, $q) {
    var dataFactory = {};

    dataFactory.getMentors = function () {
        return $http.get('/api/mentorusers');
    }

    dataFactory.getMentorsStudents = function () {
        return $http.get('/api/mentorstudents');
    }

    dataFactory.addMentorSession = function () {
        return $http.post('/api/mentorsession');
    }

    dataFactory.getPaperListMentor = function () {
        return $http.get('/api/getpaperlistformentor');
    }

    return dataFactory;

});


