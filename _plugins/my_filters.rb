module Jekyll
    module MyFun
        def inline(input)
            input.gsub(/<p>/, '').gsub(/<\/p>/, '').chomp
        end
        def bold(input)
            input.prepend('<strong>').concat('</strong>')
        end
        def italics(input)
            input.prepend('<i>').concat('</i>')
        end
        def code(input)
            input.prepend('<code>').concat('</code>')
        end
        def addUrl(input, url, target = "_self")
            input.prepend("<a href=\"#{url}\" target=\"#{target}\">").concat('</a>')
        end
    end
end

Liquid::Template.register_filter(Jekyll::MyFun)



