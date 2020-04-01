var tlFunc = {
  list: function(val,data){
    title=data.prettyName;
    logo=data.logo;
    entries=data.entries;

    var section="#"+val;
    $(section).append("\
      <div class='title'>\
        <div class='tl-icon'><div></div></div>\
        <h2 class='tl-title'>"+ title +"</h2>\
      </div>\
    ");

    switch (val){

      //////////////// Education
      case "education":
        for (const entry of Object.values(entries)){
          $(section).append("\
            <div class='entry'>\
              <div class='tl-icon'><div>\
                <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
              </div></div>\
              <div class='tl-entry'>\
                <h4 class='entry-title'>"+ entry.degree +" \
                  <span>"+ entry.date + ((entry.completed == false) ? " (expected)":"") +"</span>\
                </h4>\
                <h5 class='entry-description'>"+ entry.institution +", "+ entry.subinstitution +"</h5>\
              </div>\
            </div>\
          ");
        };
      break;

      //////////////// Awards
      case "awards":
        for (const entry of Object.values(entries)){
          $(section).append("\
            <div class='entry'>\
              <div class='tl-icon'><div>\
                <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
              </div></div>\
              <div class='tl-entry'>\
                <h4 class='entry-title'>"+ entry.award +" \
                  <span>"+ entry.date +"</span>\
                </h4>\
                <h5 class='entry-description'>"+ entry.institution +", "+ entry.subinstitution +"</h5>\
              </div>\
            </div>\
          ");
        };
      break;

      //////////////// Skills
      case "skills":
        for (const entry of Object.values(entries)){
          var htmltext="";
          for (const list of Object.values(entry.list)){
            htmltext+="\
              <span>\
                <img src='"+ list.icon +"'>\
                 "+list.text+"\
              </span>\
          "};          
          $(section).append("\
            <div class='entry'>\
              <div class='tl-icon'><div>\
                <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
              </div></div>\
              <div class='tl-entry'>\
                <h4 class='entry-title'>"+ entry.prettyName +"</h4>\
                <div class='skills'>"+htmltext+"</div>\
              </div>\
            </div>\
          ");
        };
      break;

      //////////////// Research
      case "research": 
      for (const entry of Object.values(entries)){
        var htmltext="";
        for (const list of Object.values(entry.projects)){htmltext+="<p class='bull-ind'>"+ list+"</p>"};          
        $(section).append("\
          <div class='entry'>\
            <div class='tl-icon'><div>\
              <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
            </div></div>\
            <div class='tl-entry'>\
              <h4 class='entry-title'>"+ entry.position +"\
                <span>"+ entry.start +" – "+ entry.end +"</span>\
              </h4>\
              <h5>"+ entry.institution+", "+ entry.subinstitution +"</h5> \
              "+htmltext+"\
            </div>\
          </div>\
        ");
      };
      break;

      //////////////// Teaching
      case "teaching": 
      for (const entry of Object.values(entries)){
        var htmltext="";
        for (const list of Object.values(entry.list)){
          list.title = (list.title!="") ? " ("+list.title+") in " : " for ";
          htmltext+="<h5>"+ list.position + list.title + list.course+"<span>"+ list.date +"</span></h5>"};          
        $(section).append("\
          <div class='entry'>\
            <div class='tl-icon'><div>\
              <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
            </div></div>\
            <div class='tl-entry'>\
              <h4 class='entry-title'>"+ entry.organization +"</h4>"+htmltext+"\
            </div>\
          </div>\
        ");
      };
      break;

      //////////////// Affiliations
      case "affiliation":
        for (const entry of Object.values(entries)){
          var htmltext="";
          for (const list of Object.values(entry.position)){
            htmltext+="\
              <h5>"+ list.role +"\
                <span>"+list.start+" – "+list.end+"</span>\
              </h5>\
          "};          
          $(section).append("\
            <div class='entry'>\
              <div class='tl-icon'><div>\
                <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
              </div></div>\
              <div class='tl-entry'>\
                <h4 class='entry-title'>"+ entry.organization +"</h4>\
                "+htmltext+"\
              </div>\
            </div>\
          ");
        };
      break;

      //////////////// Projects
      case "projects": 
        for (const entry of Object.values(entries)){
          $(section).append("\
            <div class='entry'>\
              <div class='tl-icon'><div>\
                <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
              </div></div>\
              <div class='tl-entry'>\
                <h4 class='entry-title'>"+ entry.title +"</h4>\
                <div><img src="+ entry.image +"><p>"+ entry.text +"</p></div>\
              </div>\
            </div>\
          ");
        };
      break;

      //////////////// Publications
      case "publications": 
      for (const entry of Object.values(entries)){
        var htmltext="";
        for (const list of Object.values(entry.list)){
          var htmltext1="";
          for (const item of Object.values(list.list)){
            htmltext1+="<p class='bull-ind'><a href='"+ item.url +"'>" + item.citationhtml+"</a></p>";
          };
          htmltext+="<h5 class='noprint'>"+ list.prettyName +"</h5>"+ htmltext1;
        };          
        $(section).append("\
          <div class='entry'>\
            <div class='tl-icon'><div>\
              <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
            </div></div>\
            <div class='tl-entry'>\
              <h4 class='entry-title'>"+ entry.prettyName +"</h4>\
              "+htmltext+"\
            </div>\
          </div>\
        ");
      };
      break;

      //////////////// Presentations
      case "presentation": 
      for (const entry of Object.values(entries)){
        $(section).append("\
          <div class='entry'>\
            <div class='tl-icon'><div>\
              <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
            </div></div>\
            <div class='tl-entry'>\
              <h4 class='entry-title'>"+ entry.conference +" \
                <span>"+ entry.date +"</span>\
              </h4>\
              <h5 class='entry-description'>"+ entry.titlehtml +"</h5>\
            </div>\
          </div>\
        ");
      };
      break;

      //////////////// References
      case "references":
        for (const entry of Object.values(entries)){
          $(section).append("\
            <div class='entry'>\
              <div class='tl-icon'><div>\
                <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
              </div></div>\
              <div class='tl-entry'>\
                <h4 class='entry-title'>"+ entry.name +"\
                  <span><small>"+ entry.email +"</small></span>\
                </h4>\
                <h5 class='entry-description'>"+ entry.position +", "+ entry.institution +"</h5>\
              </div>\
            </div>\
          ");
        };
      break;

      //////////////// Contact
      case "contact":
        for (const entry of Object.values(entries)){
          var htmltext="";
          for (const list of Object.values(entry.list)){
            htmltext+="\
              <h5>"+ list.prettyName +
                "<a href='"+ list.link +"'>"+
                  ((list.content != "") ? ": "+list.content : "") +"&nbsp;"+
                  ((list.icon != "") ? "<svg><use xlink:href='/img/icons.svg#"+ list.icon +"'/></svg> " : "") +
                "</a>" +
              "</h5>";
          };        
          $(section).append("\
            <div class='entry'>\
              <div class='tl-icon'><div>\
                <svg><use xlink:href='/img/icons.svg#"+ logo +"'/></svg>\
              </div></div>\
              <div class='tl-entry'>\
                <h4 class='entry-title'>"+ entry.prettyName +"</h4>"+htmltext+"</div>\
              </div>\
            </div>\
          ");
        };
      break;

    }
  }
}